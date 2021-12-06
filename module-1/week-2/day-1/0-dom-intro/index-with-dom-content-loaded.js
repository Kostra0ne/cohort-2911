console.log("HELLO DOM !");
// console.warn("im a warning");
// console.error('im an error and you shloud try to fix me !');

// const titleMain = document.getElementById("title-main");

// console.log("------> title main");
// console.log(titleMain);
// console.log(typeof titleMain);

function playWithTheMainTitle() {
  const titleMain = document.getElementById("title-main");
  console.log("------> title main");
  console.log(titleMain);
  console.log(typeof titleMain);
  console.log(titleMain instanceof Element);
}

window.addEventListener("DOMContentLoaded", playWithTheMainTitle);

window.addEventListener("DOMContentLoaded", () => {
  const listUsers = document.getElementById("list-users");
  console.log("listUsers ---->");
  console.log(listUsers);
  console.log(listUsers instanceof Element);
});



const readValues = (val) => {
  console.log(val);
  return "foo"
}

[1, 3, 4, 4, 5, 66, 444].forEach(readValues())



