const inputRef = document.querySelector("#validation-input");
const inputLength = inputRef.getAttribute("data-length");

const handleInput = event => {
	if (event.currentTarget.value.length !== Number(inputLength)) {
		inputRef.classList.add("invalid");
	} else {
		inputRef.classList.remove("invalid");
		inputRef.classList.add("valid");
	}
};

inputRef.addEventListener("blur", handleInput);
