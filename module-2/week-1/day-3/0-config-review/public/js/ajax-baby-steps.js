const btn = document.getElementById("btn-get-users");
const list = document.getElementById("list-users");

function display(users) {
  list.innerHTML = "";
  users.forEach((user) => {
    list.innerHTML += `<li>
            ${user.name} ${user.lastname}
        </li>`;
  });
}

function fetchAllUsersFromBackend() {
  axios
    .get("/users")
    .then((httpResponse) => {
      display(httpResponse.data);
    })
    .catch((httpError) => console.error(httpError));
}

if (btn !== null) {
  btn.onclick = fetchAllUsersFromBackend;
}
