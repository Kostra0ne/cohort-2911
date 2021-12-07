// 1 target the usefull objects in the document
const btns = document.querySelectorAll("#header-main .btn");
console.log(btns);
// 2 define the business logic (functions)

function handleButtonClick(evt) {
  const clickedBtn = evt.target;
  clickedBtn.classList.toggle("is-selected");
}

// 3 set the event listeners / handlers
btns.forEach((btn) => (btn.onclick = handleButtonClick));

// 4 kickstart the initial app's state (if any)
