const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const handleInput = event => {
	spanRef.textContent = event.currentTarget.value;
	if (event.currentTarget.value === "") {
		spanRef.textContent = "Anonymous";
	}
};

inputRef.addEventListener("input", handleInput);
