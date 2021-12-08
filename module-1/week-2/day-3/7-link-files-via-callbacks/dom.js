import { sumLocalArray } from "./logic.js";

const btn = document.getElementById("my-btn");
const result = document.getElementById("result");

function displaySum(sum) {
  console.log("sum coming from logic.js >", sum);
  result.textContent = sum;
}

// btn.onclick = () => sumLocalArray(displaySum);

btn.onclick = function (evt) {
  sumLocalArray(displaySum);
};
