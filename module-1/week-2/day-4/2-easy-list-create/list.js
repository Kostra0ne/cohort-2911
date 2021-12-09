const input = document.getElementById("my-text-input");
const list = document.getElementById("todo-list");
const button = document.getElementById("my-btn");

const checkValue = (string) => string.length >= 3;

function handleClick() {
  // 1 get the input's value
  const currentValue = input.value;
  // 2 check if value is valid
  // 2.1 if not warn
  if (!checkValue(currentValue)) return warnUser();
  // 3 create li with value as text content
  const li = document.createElement("li");
  li.textContent = currentValue;
  // 4 insert li in document
  list.appendChild(li); // insert the li in the list element
  input.value = "";
  input.focus(); // this will select the input one more time
}

function handleKeypress(evt) {
  if (evt.key === "Enter") handleClick();
}

function warnUser() {
  alert("one todo item must contain at least 5 chars !");
}

button.addEventListener("click", handleClick);

window.addEventListener("keypress", handleKeypress);
