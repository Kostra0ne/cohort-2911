// 1 target the usefull objects in the document
const blocks = document.querySelectorAll(".block");
const btn = document.getElementById("btn-1");

// 2 define the business logic (functions)
let isAnimated = false;

function setButtonText(evt) {
  btn.textContent = isAnimated === true ? "stop animation" : "start animation";
}

function startAnimation(evt) {
  blocks.forEach((block) => block.classList.add("is-animated"));
}

function stopAnimation(evt) {
  blocks.forEach((block) => block.classList.remove("is-animated"));
}

// 3 set the event listeners / handlers
btn.onclick = () => {
  isAnimated = !isAnimated;
  console.log(isAnimated);
  setButtonText();
  if (isAnimated) startAnimation();
  else stopAnimation();
};
// 4 kickstart the initial app's state (if any)
