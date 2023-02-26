const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

counterValue.textContent = 0;

const btnDecrement = () => (counterValue.textContent -= 1);

const btnIncrement = () => (counterValue.textContent = Number(counterValue.textContent) + 1);

buttonDecrementRef.addEventListener("click", btnDecrement);
buttonIncrementRef.addEventListener("click", btnIncrement);
