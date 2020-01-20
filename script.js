var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	//li.appendChild(document.createTextNode(input.value));
	li.innerHTML = input.value + " <button class=\"delete\">Delete</button>";
	ul.appendChild(li);
	input.value = ""
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function delegateEvent(event){
	if(event.target){
		if(event.target.nodeName == "LI"){
			event.target.classList.toggle("done");
		}
	 	else if(event.target.nodeName == "BUTTON"){
	 		event.target.parentElement.remove();
	 	} 
	}
	
}


//event listening
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", delegateEvent);

