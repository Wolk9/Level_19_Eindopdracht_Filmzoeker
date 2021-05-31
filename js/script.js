const movieListGet = document.querySelector("#film-list");

const sel = "X-Men";

const listNewestFilms = movies.filter((item) => item.Year > 2015);
const listSelectedFilms = movies.forEach((item, index, array) => {
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
    "<br>";
});

// const selectedFilms = movies.flat(() =>
//   movies.filter((item) => item.Title.includes(sel))
// );

console.log(listNewestFilms);

// let selection = (selected) => {
//   for (i = 0; i < movies.length; i++) {
//     // const returnValue = movies.map((value, index, array) => {

//     // }, thisArg)
//   }
// };

const check = () => (document.getElementByID("x-men").checked = true);
