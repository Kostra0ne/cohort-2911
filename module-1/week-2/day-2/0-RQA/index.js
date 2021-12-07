import { fruits as baseFruits } from "./fruits.js";

const fruits = [...baseFruits];

const fruitsElement = document.getElementById("fruits");
const sumElement = document.getElementById("sum");
const btnAddElement = document.getElementById("btn-add-fruit");
const inputName = document.getElementById("input-fruit-name");
const inputPrice = document.getElementById("input-fruit-price");

function calcSum(array) {
  return array.reduce((a, v) => a + v.price, 0);
}

function checkFruit(fruitObject) {
  return isFinite(fruitObject.price) && fruitObject.name.length >= 3;
}

function createOneLi(fruit) {
  const li = document.createElement("li");
  li.classList.add("item");
  li.setAttribute("type", "I");
  li.innerHTML = `<span>${fruit.name}</span> <b>(${fruit.price} &euro;)</b>`;
  fruitsElement.appendChild(li);
}

function displaySum(array) {
  sumElement.innerHTML = calcSum(array) + `&euro;`;
}

function getFruitInfos() {
  return {
    name: inputName.value,
    price: Number(inputPrice.value),
  };
}

function handleSubmitClick() {
  const newFruit = getFruitInfos();
  if (!checkFruit(newFruit)) return alert("NOPE, no good fruit");
  createOneLi(newFruit);
  fruits.push(newFruit);
  displaySum(fruits);
}

displaySum(fruits);

fruits.forEach((fruit) => {
  createOneLi(fruit);
});

// add event listeners
btnAddElement.addEventListener("click", handleSubmitClick);
