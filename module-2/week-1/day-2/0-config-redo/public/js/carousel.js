console.log("hey i'm carousel dom script");

const carouselElement = document.querySelector(".carousel");

const buttons = carouselElement.querySelectorAll(".btn");

function handleClick(evt) {
  console.log(evt);
}

buttons.forEach((btn) => (btn.onclick = handleClick));
