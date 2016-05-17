"use strict";

(function(){
	const vm = this;
	let button = document.createElement("button");
	button.setAttribute("id", "clicker");

	document.body.appendChild(button);
	console.log(button);
	let checked = false;
	
	let rhyhorn = () => {
		if (checked != true){
		let div, frag, img, colors, dims;
	
		frag = document.createDocumentFragment();

  
	    div = document.createElement("div");
	    div.setAttribute("id", "container")
		
		dims = Math.floor(screen.height/5);
	    for(let i=1; i<50; i++){
		colors= (Math.floor(Math.random()*900000) + 100000);	
	    img = document.createElement("img");
	    img.src = "http://placeskull.com/" + dims + "/" + dims + "/" + colors + "/" + i;
	    div.appendChild(img);
	  	frag.appendChild(div);
     	document.body.appendChild(frag);
		console.log(dims);

	   }}

	    button.className="hidden";
     	return checked = true;


 
 }
	

	 document.querySelector("button").addEventListener("click", rhyhorn);
	


     })();

  
