const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", function () {
	spanRef.style.fontSize = `${this.value}px`;
});
