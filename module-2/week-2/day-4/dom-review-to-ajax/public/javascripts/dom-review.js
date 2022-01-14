console.log("hello DOM !");

// how to select by id ?
const titleMain = document.getElementById("title-main");
// how to select by class (HTMLCOllection => live)
const parags = document.getElementsByClassName("text");
// how to select one with a css selector
const btnSort = document.querySelector("button#btn-sort");
// how to select several with a css selector (NodeList => !live)
const rowButtons = document.querySelectorAll(".buttons button");

console.log(titleMain, parags, btnSort, rowButtons);

function handleSort(evt) {
  console.log("hello click", evt);
}

function handleActions(evt) {
  console.log(evt.target);
  const actionName = evt.target.getAttribute("data-action");
  console.log("hello action : " + actionName);
}

// add a click listener/handler to the sort button

// btnSort.addEventListener("click", handleSort); // long way
btnSort.onclick = handleSort; // short way

// what about array like structures ? you'll need a loop
rowButtons.forEach((btn) => (btn.onclick = handleActions));
