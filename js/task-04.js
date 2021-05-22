// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
