// STORE DOM ELEMENTS
const carouselElement = document.getElementById("carousel");
const img = carouselElement.querySelector(".img");
// above : element.querySelector is an option too
// https://developer.mozilla.org/fr/docs/Web/API/Element/querySelector
const btns = carouselElement.querySelectorAll(".btn");

// NEEDED INFOS
const imgs = [
  "fractal-1.jpeg", // 0
  "fractal-2.jpeg", // 1
  "fractal-3.jpeg", // 2
  "fractal-4.jpeg", // 3
];

var count = 0;

// EVENT HANDLER

function handleClick(evt) {
  const btn = evt.target; // evt.target => the clicked button

  if (btn.id === "btn-prev") {
    // decrements count or set it at the last img's index
    count = count === 0 ? imgs.length - 1 : count - 1;
  } else {
    // increments count or set it at zero (reset)
    count += 1;
    if (count === imgs.length) count = 0;
  }
  img.src = `./imgs/${imgs[count]}`; // change the image's source
}

function handleClickShorter(evt) {
  const btn = evt.target;
  if (btn.id == "btn-prev") count = count === 0 ? imgs.length - 1 : count - 1;
  else count = count === imgs.length - 1 ? 0 : count + 1;
  img.src = `./imgs/${imgs[count]}`;
}

// EVENT LISTENER

btns.forEach((btn) => (btn.onclick = handleClick));
// loop + event-listener + event-handler


/*  OTHER OPTIONS  */

/* longer syntax of previous loop below : */

// btns.forEach(function (btn) {
//   btn.addEventListener("click", handleClick);
// });

/* without a loop ? ^^ */

// const btnPrev = document.getElementById("btn-prev");
// const btnNext = document.getElementById("btn-next");
// btnPrev.onclick = handleClick;
// btnNext.onclick = handleClick;

/*  with html COllections */
// const btnsCollection = document.getElementsByClassName("btn");

/* with a for loop ? ^^ */

// for (let i = 0; i < btnsCollection.length; i++) {
//   btnsCollection[i].onclick = handleClick;
// }

/*
  html collection don't implement forEach via their prototype (schema)
  here is a possible workaround =>
*/

// Array.from(btnsCollection).forEach(btn => btn.onclick = handleClick);
// [...btnsCollection].forEach(btn => btn.onclick = handleClick);
