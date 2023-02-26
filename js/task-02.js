const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listRef = document.querySelector("#ingredients");

const createElements = elements => {
	return elements.map(element => {
		const item = document.createElement("li");
		item.textContent = element;
		item.classList.add("item");

		return item;
	});
};

const elements = createElements(ingredients);
listRef.append(...elements);
