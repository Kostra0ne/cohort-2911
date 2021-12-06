console.log("HELLO DOM !");
const titleMain = document.getElementById("title-main");
const listUsers = document.getElementById("list-users");
// console.log(titleMain instanceof Element);
// console.log(listUsers instanceof Element);
// console.log(listUsers);

console.log(titleMain);
console.log(typeof titleMain);

console.log("what's the title's id >", titleMain.id);
console.log("what are title's CSS classes >", titleMain.className);

// titleMain is an object,
// so you can access it's properties (and methods) as a regular JS object

titleMain.style.color = "red";
titleMain.style.fontWeight = "bolder";
titleMain.style.fontSize = "2rem";

titleMain.textContent = "Damn' DOM is powerfull";

// titleMain.remove(); // this will remove the title from the document
console.log("===================");

const clickableElements = document.getElementsByClassName("is-clickable");
console.log(clickableElements);
console.log(clickableElements.forEach);

for (let i = 0; i < clickableElements.length; i++) {
  console.log(typeof clickableElements[i]);
}

// if you want to use forEach : it's possible through spread or Array.from : )
[...clickableElements].forEach((el) => {
  console.log(el);
  el.style.color = "blue";
});

console.log("===================");
const underlinedElements = document.getElementsByClassName("underlined");
console.log(underlinedElements);

console.log("========= by class name ==========");
const emptyCollection = document.getElementsByClassName("toto");
console.log(emptyCollection);
console.log(emptyCollection.length);

console.log("======= by tag name ============");

const allLis = document.getElementsByTagName("li");
console.log(allLis);

console.log("======= querySelector ============");
const firstItem = document.querySelector(".foo");
const boldElement = document.querySelector(".bold");
const apiElement = document.querySelector("#api");
const apiElementChild = document.querySelector("#api i");

console.log(">>>>>", firstItem);
// console.log(boldElement, apiElement, apiElementChild);

console.log("======= querySelectorAll ============");

const items = document.querySelectorAll(".item");

items.forEach((item, i) => {
    console.log(
      i,
      "text's size inside the current item",
      item.textContent.length
    );
//   console.log("previous sibling ?", item.previousElementSibling);
//   console.log("next sibling ?", item.nextElementSibling);
});
