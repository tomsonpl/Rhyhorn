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
		id,
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
	doMagic = () => {
		colors = (Math.floor(Math.random()*900000) + 100000);
		id = (Math.floor(Math.random()*900) + 1);
	    	img = document.createElement("img");
	  	img.src = "http://placeskull.com/" + dims + "/" + dims + "/" + colors + "/" + id;
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
		n = screen.width*0.02;
		dims = Math.floor(boxSize);

		for (i=1; i<n; i++) {
     		doMagic(i);
		}
		//Hide button
	    	button.className="hidden";

	}
	

	window.onscroll = (event) => {
		for (i=0; i<3; i++) {
			console.log(i);
			doMagic();
		}
	}

	document.querySelector("button").addEventListener("click", rhyhorn);

})();

  
// TO BE DONE
//Get screen height. Check that it is less than container height. Add 20% of screen size
