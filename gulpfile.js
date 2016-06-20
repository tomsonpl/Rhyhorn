const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');


// Static Server + watching scss/html files
gulp.task('default', ['sass','js'], function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("static/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("static/*.scss")
	.pipe(plumber())
    .pipe(sass())
	.pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest("static/"))
    .pipe(browserSync.stream());
});


// Babel+ sourcemaps
gulp.task('js', function() {
    return gulp.src("static/*.js")
	.pipe(sourcemaps.init())
	.pipe(babel({
	presets: ['es2015']
	}))
	.pipe(concat('all.js'))
	.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("static/")) 
});

