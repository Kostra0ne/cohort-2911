const URL = "https://api.chucknorris.io/jokes/random";
const URL2 = "https://api.chucknorris.io/jokes/random";

console.log(URL); // a simple string representing a valid URL
console.log(axios); // a function

function fetchJoke() {
  // this is a glance to what's coming at module 2 > Promises
  axios
    .get(URL)
    .then((response) => {
      // if the fetch is successfull > response object
      console.log(response);
      console.log(response.data.value); // this contains the actual chuck norris joke
      document.getElementById("joke").textContent = response.data.value;
    })
    .catch((error) => {
      console.error(error);
    });
}

document.getElementById("btn").onclick = fetchJoke;
