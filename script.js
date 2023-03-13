var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll(".task");
var btns = document.querySelectorAll(".delete");

function removeTask(event) {
	event.target.parentNode.remove();
}

function inputLength() {
	return input.value.length;
}

function toggleDone(element) {
	element.classList.toggle("done");
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	var btn = document.createElement("button")
	btn.classList.add("btn", "btn-primary");
	btn.innerHTML = "Delete";
	btn.addEventListener("click", removeTask);

	var elem = document.createElement("div");
	elem.classList.add("task");

	li.addEventListener("click", () => {
		toggleDone(li);
	})

	elem.appendChild(li);
	elem.appendChild(btn);
	ul.appendChild(elem);
	input.value = "";
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

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
btns.forEach(element => {
	element.addEventListener("click", removeTask);
});
list.forEach(elem =>
	elem.addEventListener("click", () => {
		toggleDone(elem);
	})
);


