function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesContainerRef = document.querySelector("#boxes");

const createBoxes = amount => {
	const boxes = [];
	let size = 30;
	for (let i = 0; i < amount; i += 1) {
		const boxEl = document.createElement("div");
		boxEl.style.width = `${size}px`;
		boxEl.style.height = `${size}px`;
		boxEl.style.backgroundColor = getRandomHexColor();
		boxes.push(boxEl);
		size += 10;
	}
	boxesContainerRef.append(...boxes);
};

createBtnRef.addEventListener("click", () => {
	const amount = inputRef.value;
	createBoxes(amount);
});

const handleDestroyBoxes = () => (boxesContainerRef.innerHTML = "");

destroyBtnRef.addEventListener("click", handleDestroyBoxes);
