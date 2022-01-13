const buttonCreate = document.querySelector("#block-create-user button");
const inputEmail = document.getElementById("new-user-email");
const inputName = document.getElementById("new-user-name");
const listUsers = document.getElementById("list-users");

//  AJAX IS ALL ABOUT PREVENTING THE PAGE REFRESHES

// 1 DOM MANIPULATION FUNCTIONS

function generateListItem(params) {
    
}

function displayUsers(users) {
  listUsers.innerHTML = "";
  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;
    listUsers.appendChild(li);
  });
}

function appendUser(user) {
  const li = document.createElement("li");
  li.textContent = `${user.name} - ${user.email}`;
  listUsers.appendChild(li);
}

//*****************************/
// 2 AJAX FUNCTIONS : CONNECTIONG WITH THE BACKEND

const fetchAllUsers = () => axios.get("/users");
// returning a Promise

const createOneUser = (payload) => axios.post("/users", payload);
// returning a Promise

//*****************************/
// 3 HANDLING FUNCTIONS : RESPONDING TO DOM EVENTS

function handleUserCreate() {
  createOneUser({
    name: inputName.value,
    email: inputEmail.value,
  })
    // .then(() => fetchAllUsers())
    .then((newUser) => appendUser(newUser.data))
    .then((users) => displayUsers(users.data))
    .catch((err) => console.error(err));
}

//45 -  EVENT LISTENING

buttonCreate.onclick = handleUserCreate;
