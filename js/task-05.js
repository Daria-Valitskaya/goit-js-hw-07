// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const refs = {
  input: document.querySelector("#name-input"),
  name: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  if (event.target.value.length > 0) {
    refs.name.textContent = event.target.value;
  } else refs.name.textContent = "незнакомец";
}
