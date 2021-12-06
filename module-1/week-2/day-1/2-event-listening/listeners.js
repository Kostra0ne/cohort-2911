console.log("im listeners and im ready to rock !!!");
// https://developer.mozilla.org/en-US/docs/Web/Events

// 1 select the div#first-block
// 2 select the first button
// 3 select the second button
// 4 select the first input
// 5 select the scond input

const div = document.getElementById("first-block");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const input1 = document.getElementById("input-1");
const inputColor = document.getElementById("input-3");
const textTarget = document.getElementById("text-target");

let countClick = 0;

function handleButtonClick(event) {
  console.log("the element has been clicked !", event);
  console.log(typeof event);
  console.log(event.target);
  //   countClick++;
  //   console.log(countClick);
}

function mouseEnterHandler(evt) {
  console.log("the mouse entered the element", evt);
}

function mouseLeaveHandler() {
  console.log("the mouse leaved the element");
}

function handleInput(evt) {
  textTarget.style.color = evt.target.value;
}

window.addEventListener("scroll", function () {
  console.log("user is scrolling the page");
});

// hey JS, be nice please, use the div object
// and listen to cliks on it
// whenever a user clicks, execute the provided callback function

div.addEventListener("click", function (evt) {
  console.log("clicked !!!", evt);
});

console.log(inputColor);

// just a shortcut >
btn1.onclick = () => alert("whoooo");
btn2.onclick = handleButtonClick;

// input1.oninput = handleInput;
inputColor.addEventListener("input", handleInput);
div.addEventListener("mouseenter", mouseEnterHandler);
div.addEventListener("mouseleave", mouseLeaveHandler);
