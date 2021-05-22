const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const itemImages = ({ url, alt }) => {
  return `
  <li>
    <img src="${url}" alt="${alt}" />
  </li > `;
};
const imagesContainer = document.querySelector("ul#gallery");
const makeImagesList = images.map(itemImages).join("");
imagesContainer.insertAdjacentHTML("afterbegin", makeImagesList);

console.log(makeImagesList);
// const imagesEl = images.map((image) => {
//   const itemEl = document.createElement("li");
//   itemEl.classList.add(".item--list");
//   const imageEl = document.createElement("img");
//   imageEl.classList.add(".item--image");
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = "320";

//   itemEl.appendChild(imageEl);
//   return itemEl;
// });
// console.log(imagesEl);
// imagesContainer.append(...imagesEl);
// Используй массив объектов images для ,
// создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи
// флексбоксами или гридами через css - классы.
