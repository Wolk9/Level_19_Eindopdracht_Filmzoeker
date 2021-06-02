const movieListGet = document.querySelector("#film-list");
const genreSelect = document.querySelector("nav");

genreSelect.onclick = function () {
  const radioBtn = document.querySelector('input[name="genre"]:checked').value;
  console.log(radioBtn);
  makeMovieList(radioBtn);
};

const resultMoviesList = [];
const makeMovieList = (selection) => {
  for (a = 0; a < movies.length; a++) {
    if (movies[a].Title.indexOf(selection) > -1) {
      resultMoviesList.push(movies[a]);
    }
  }
};

const listNewestFilms = movies.filter((item) => item.Year > 2015);

const listSelectedFilms = resultMoviesList.forEach((item) => {
  let li = document.createElement("li");
  let line = movieListGet.appendChild(li);
  line.innerHTML +=
    "<img src='" +
    item.Poster +
    "' alt='" +
    item.Title +
    "'></img>" +
    item.Title +
    " " +
    item.Year +
    " " +
    item.Type +
    " " +
    item.imdbID;
  ("<br>");
});
