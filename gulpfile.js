var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
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
        .pipe(gulp.dest("./static"))
        .pipe(browserSync.stream());
});



gulp.task('default', ['serve']);
