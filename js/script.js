const movieListGet = document.querySelector("#film-list");
let genreSelect = document.querySelector("nav");
let genreSearch = document.querySelector("#search");
let resultMoviesList = [];

const makeMovieList = (choise) => {
  console.log("in makeMovieList: " + choise);

  if (choise != "nieuwste-films") {
    for (a = 0; a < movies.length; a++) {
      if (movies[a].Title.indexOf(choise) > -1) {
        resultMoviesList.push(movies[a]);
      }
    }
  } else if (choise == "zoek een titel") {
    console.log("zoeken");
  } else {
    resultMoviesList = movies.filter((item) => item.Year > 2015);
  }
  listSelectedFilms(choise);
};

const listSelectedFilms = () => {
  resultMoviesList.forEach((item) => {
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
  resultMoviesList = [];
};

genreSelect.addEventListener("click", selectBtn);

function selectBtn() {
  const radioBtn = document.querySelector('input[name="genre"]:checked').value;

  // Remove an eventualy existing list
  clearList();

  // call creating list according to selection
  makeMovieList(radioBtn);
}

//setup before functions
let typingTimer; //timer identifier
let doneTypingInterval = 500; //time in ms (0,5 seconds)
let myInput = document.getElementById("search");

//on keyup, start the countdown
myInput.addEventListener("keyup", () => {
  genreSelect.removeEventListener("click", selectBtn);

  clearList();
  clearTimeout(typingTimer);
  if (myInput.value) {
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  }
  genreSelect.addEventListener("click", selectBtn);
});

//user is "finished typing," do something
function doneTyping() {
  //do something
  // Remove an eventualy existing list
  console.log(myInput.value);

  makeMovieList(myInput.value);
}

function clearList() {
  const parent = document.getElementById("film-list");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
  if (myInput.value === "zoek een titel") {
    myInput.value = " ";
  }
}
