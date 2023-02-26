const listRef = document.querySelector("#categories");
console.log(`Number of categories ${listRef.children.length}`);

const itemRef = listRef.children;

[...itemRef].forEach(element => {
	console.log(`Category: ${element.firstElementChild.textContent}`);
	console.log(`Category: ${element.lastElementChild.children.length}`);
});

// option 2 //

// const itemRef = document.querySelectorAll(".item");
// console.log(`Number of categories ${itemRef.length}`);

// itemRef.forEach.call(itemRef, element => {
// 	const titleRef = element.querySelector("h2");
// 	const itemLength = element.querySelectorAll("li");
// 	console.log(`Category: ${titleRef.textContent}`);
// 	console.log(`Elements: ${itemLength.length}`);
// });
