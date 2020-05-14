var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", buttonClicked);
input.addEventListener("keypress", enterPressed);

function enterPressed(event) {
	if (event.keyCode === 13) {
		append();
	}
}

/*For clarity and later use*/
function buttonClicked() {	
		append();
}

function append() {	 
	if (input.value.length > 0 && input.value.length < 20) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
}






/*

function addButton() {
	var addButton = document.createElement("button");



input.addEventListener("keypress", function(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
})*/
