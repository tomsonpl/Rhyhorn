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
		let div, frag, img, colors, rand;
	
		frag = document.createDocumentFragment();

  
	    div = document.createElement("div");
	    div.setAttribute("id", "container")

	    for(let i=1; i<99; i++){
			colors= [];
		    for (let i=1; i<99;i++){
				colors.push(Math.floor(Math.random()*900000) + 100000);
			}
		rand = colors[Math.floor(Math.random() * colors.length)];
    		
	    img = document.createElement("img");
	    img.src = "http://placeskull.com/150/150/" + rand + "/" + i;
	    div.appendChild(img);
	  	frag.appendChild(div);
     	document.body.appendChild(frag);

	   }}

	    button.className="hidden";
     	return checked = true;

 
 }
	

	 document.querySelector("button").addEventListener("click", rhyhorn);
	



     })();

  
