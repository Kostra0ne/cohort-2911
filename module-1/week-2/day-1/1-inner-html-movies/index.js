import { movies } from "./data.js";
// console.log(Array.isArray(movies));
// console.log(movies.length);
// console.log(movies[0]);

const listElement = document.getElementById("movies-list");
const avgElement = document.getElementById("avg");

function displayAverage(avg) {
  avgElement.textContent = avg;
}

function displayMovies(moviesList) {
  // iterate on the movies list
  moviesList.forEach((movie) => {
    const div = document.createElement("div");
    div.className = "movie-item";
    div.textContent = `${movie.title} - ${movie.director}`;
    listElement.appendChild(div);
    div.onclick = toggleCSSClass;
  });
}

function removeMovieFromList(evt) {
  evt.target.remove();
}

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  const sum = moviesArray.reduce(
    (acc, movie) => (Boolean(movie.score) === true ? acc + movie.score : acc),
    0
  );
  return Number((sum / moviesArray.length).toFixed(2));
}

function toggleCSSClass(evt) {
  const clickedDiv = evt.target;
  clickedDiv.classList.toggle("is-selected");
}

// start the business logic
displayMovies(movies);
// displayAverage(scoresAverage(movies));
