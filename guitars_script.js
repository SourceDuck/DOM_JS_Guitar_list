var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

button.addEventListener("click", buttonClicked);
input.addEventListener("keypress", enterPressed);

function enterPressed(event) {
	if (event.keyCode === 13) {
		append();
	}
}

/*If needed for attributes*/
function buttonClicked() {	
		append();
}

function append() {	 
	if (input.value.length > 0 && input.value.length < 20) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value + " "));
		ul.appendChild(li);
		input.value = "";
				var btn = document.createElement("button");
	     		btn.appendChild(document.createTextNode("Remove"));
			li.appendChild(btn);
	}
}

/*Delete any row, prefilled or new.*/
	ul.addEventListener('click', (e) => {
   if (e.target.matches('li')) {
     e.target.classList.toggle("done");    
   } 

   if (e.target.matches('li button')) {
     e.target.closest('li').remove();
   }
});
