function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const body = document.querySelector("body");

const handleChangeColor = () => {
	const randomColor = getRandomHexColor();
	body.style.backgroundColor = randomColor;
	spanRef.textContent = randomColor;
};

buttonRef.addEventListener("click", handleChangeColor);
