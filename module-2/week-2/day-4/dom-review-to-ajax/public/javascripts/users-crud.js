const buttonCreate = document.querySelector("#block-create-user button");
const inputEmail = document.getElementById("new-user-email");
const inputName = document.getElementById("new-user-name");
const listUsers = document.getElementById("list-users");
let buttonsDelete = document.querySelectorAll(".btn.delete");
let buttonsUpdate = document.querySelectorAll(".btn.update");

//  AJAX IS ALL ABOUT PREVENTING THE PAGE REFRESHES

// 1 DOM MANIPULATION FUNCTIONS

function generateListItem(user) {
  const tr = document.createElement("tr");
  tr.className = "user";
  tr.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td><button class="btn delete" data-user-id="${user._id}">delete</button></td>
    <td><button class="btn update" data-user-id="${user._id}">update</button></td>
    `;
  return tr;
}

function listenOnDeleteButtons() {
  buttonsDelete = document.querySelectorAll(".btn.delete");
  buttonsDelete.forEach((btn) => (btn.onclick = handleDelete));
}

function listenOnUpdateButtons() {
  buttonsUpdate = document.querySelectorAll(".btn.update");
  buttonsUpdate.forEach((btn) => (btn.onclick = handleUpdate));
}

function displayUsers(users) {
  listUsers.innerHTML = "";
  users.forEach((user) => listUsers.appendChild(generateListItem(user)));
  listenOnDeleteButtons();
}

function appendUser(user) {
  listUsers.appendChild(generateListItem(user));
  listenOnDeleteButtons();
}

//*****************************/
// 2 AJAX FUNCTIONS : CONNECTIONG WITH THE BACKEND

const fetchAllUsers = () => axios.get("/users");
// returning a Promise

const createOneUser = (payload) => axios.post("/users", payload);
// returning a Promise

const deleteOneUser = (id) => axios.delete(`/users/${id}`);
// returning a Promise

const updateUser = (id, payload) => axios.patch(`/users/${id}`, payload);
// returning a Promise

//*****************************/
// 3 HANDLING FUNCTIONS : RESPONDING TO DOM EVENTS

function handleDelete(evt) {
  const btn = evt.target;
  const id = btn.getAttribute("data-user-id");

  deleteOneUser(id)
    .then(fetchAllUsers)
    .then((users) => displayUsers(users.data))
    .catch((err) => console.error(err));
}

function handleUserCreate() {
  createOneUser({
    name: inputName.value,
    email: inputEmail.value,
  })
    // .then(() => fetchAllUsers())
    .then((newUser) => appendUser(newUser.data))
    // .then((users) => displayUsers(users.data))
    .catch((err) => console.error(err));
}

function handleUpdate(evt) {
  // get the clicked button
  const btn = evt.target;
  // get the id of the user we wanna update
  const id = btn.getAttribute("data-user-id");
  // get the parent row
  const tr = btn.parentElement.parentElement;
  // get the 2 first tds we wanna set as contenteditable
  const editableTds = tr.querySelectorAll("td:nth-child(1), td:nth-child(2)");

  // this functions loops through editable tds and exectue a given callback
  const parseTds = (callback) => editableTds.forEach(callback);

  // this toggles the contenteditable to true or false on a targeted td
  const setUpdateMode = (td, mode) => td.setAttribute("contenteditable", mode);

  // set a green bg on the current edited row and changes the buttons text
  const toggleRowEditMode = () => {
    const status = tr.classList.toggle("is-editing-mode");
    btn.textContent = status === true ? "save" : "update";
  };

  // this starts the edit mode
  const startEditMode = () => {
    toggleRowEditMode(); // the row's background is green, the button text is 'save'
    parseTds((td) => setUpdateMode(td, true)); // td are now editable
  };

  // this will revert to the initial state
  const stopEditMode = () => {
    toggleRowEditMode(); // the row's background is white, the button text is 'update
    parseTds((td) => setUpdateMode(td, false)); // td are now NOT editable
    listenOnUpdateButtons(); // the update buttons are listening to the initial callback
  };

  startEditMode(); // trigger the green row and so on ...

  btn.onclick = () => {
    // when click on button when it displays 'save'
    updateUser(id, {
      // this reaches the backend patch route
      name: editableTds[0].textContent, // with the appropriate values ...
      email: editableTds[1].textContent, /// ... sent as payload
    })
      .then(stopEditMode) // when done, we can stop the edit mode
      .catch((err) => console.error(err)); // if an error occurs, we catch it
  };
}

//45 -  EVENT LISTENING

buttonCreate.onclick = handleUserCreate;
listenOnDeleteButtons();
listenOnUpdateButtons();
