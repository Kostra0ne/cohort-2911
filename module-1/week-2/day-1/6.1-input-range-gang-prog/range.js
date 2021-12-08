// select the needed element
const input = document.getElementById("my-range-1");
const result = document.querySelector("p#result");

function handler(evt) {
  let css;
  let value = Number(evt.target.value);
  result.textContent = value;
  if (value <= 33) css = "danger";
  else if (value >= 33 && value <= 66) css = "warning";
  else css = "success";
  result.className = css;
}

// listen to event
// input.oninput = handler;
input.addEventListener("input", handler);
