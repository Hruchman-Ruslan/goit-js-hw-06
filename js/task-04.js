const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

counterValue.textContent = 0;

const handleBtnDecrement = () => (counterValue.textContent -= 1);

const handleBtnIncrement = () => (counterValue.textContent = Number(counterValue.textContent) + 1);

buttonDecrementRef.addEventListener("click", handleBtnDecrement);
buttonIncrementRef.addEventListener("click", handleBtnIncrement);
