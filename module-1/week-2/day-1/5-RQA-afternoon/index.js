const inputs = document.getElementsByTagName("input");
console.log(inputs);

function handleInput(evt) {
  console.log(evt);
  console.log(evt.target);
  console.log(evt.target.value);
  console.log(inputs[0] === evt.target);
}

for (let input of inputs) {
  input.oninput = handleInput;
}
