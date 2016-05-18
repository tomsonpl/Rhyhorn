"use strict";

(function () {
	let button,
		rhyhorn,
		doMagic,
		addImages,
		div,
		i,
		n,
		frag,
		img,
		colors,
		dims,
		randNum,
		boxSize;

	button = document.createElement("button");
	button.setAttribute("id", "clicker");
	document.body.appendChild(button);
	console.log(button);

	//Append Imgs, do magic
	doMagic = (index) => {
		
		colors = (Math.floor(Math.random()*900000) + 100000);
	    img = document.createElement("img");
	    img.src = "http://placeskull.com/" + dims + "/" + dims + "/" + colors + "/" + index;
	    div.appendChild(img);
	  	frag.appendChild(div);
     	document.body.appendChild(frag);
	}

	rhyhorn = () => {
				
		frag = document.createDocumentFragment();
	    div = document.createElement("div");
	    div.setAttribute("id", "container")

		//Generate Sizes and Colors
		boxSize = screen.height/5;
		n = screen.width*0.021;
		dims = Math.floor(boxSize);

		for (i=1; i<n; i++) {	
     		doMagic(i);
		}

		addImages = () => {
			for (i=(Math.floor(Math.random()*9)+1); i<8; i++) {
			doMagic(i);
			}
		}
		//Hide button
	    button.className="hidden";

	}
	
	window.onscroll = () => {
		addImages();
	}  

	document.querySelector("button").addEventListener("click", rhyhorn);

})();

  
// TO BE DONE
//Get screen height. Check that it is less than container height. Add 20% of screen size