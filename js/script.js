const movieListGet = document.querySelector("#film-list");
let genreSelect = document.querySelector("nav");
let genreSearch = document.querySelector("#search");
let resultMoviesList = [];

movies.forEach(function (item) {
  let filmURL = "<a href='https://www.imdb.com/title/" + item.imdbID + "'/>";
  item.ImdbURL = filmURL;
});

const makeMovieList = (choice) => {
  console.log("in makeMovieList: " + choice);

  if (choice === "nieuwste-films") {
    resultMoviesList = movies.filter((item) => item.Year >= 2014);
  } else {
    for (a = 0; a < movies.length; a++) {
      if (movies[a].Title.indexOf(choice) > -1) {
        resultMoviesList.push(movies[a]);
      }
    }
  }
  listSelectedFilms(choice);
};

const listSelectedFilms = () => {
  resultMoviesList.forEach((item) => {
    let li = document.createElement("li");
    let filmLi = movieListGet.appendChild(li);

    let filmCardDiv = document.createElement("div");
    filmCardDiv.className += "film-card";
    let filmCard = filmLi.appendChild(filmCardDiv);

    let filmCardInnerDiv = document.createElement("div");
    filmCardInnerDiv.className += "film-card-inner";
    let filmCardInner = filmCard.appendChild(filmCardInnerDiv);

    let filmCardFrontDiv = document.createElement("div");
    filmCardFrontDiv.className += "film-card-front";
    let filmCardFront = filmCardInner.appendChild(filmCardFrontDiv);

    filmCardFront.innerHTML +=
      "<img src='" + item.Poster + "' alt='" + item.Title + "'></img>";

    let filmCardBackDiv = document.createElement("div");
    filmCardBackDiv.className += "film-card-back";
    let filmCardBack = filmCardInner.appendChild(filmCardBackDiv);

    let filmCardTitleClass = document.createElement("h3");
    filmCardTitleClass.className += "film-card-title";
    let filmCardTitle = filmCardBack.appendChild(filmCardTitleClass);

    let filmCardYearClass = document.createElement("p");
    filmCardYearClass.className += "film-card-year";
    let filmCardYear = filmCardBack.appendChild(filmCardYearClass);

    let filmCardTypeClass = document.createElement("p");
    filmCardTypeClass.className += "film-card-type";
    let filmCardType = filmCardBack.appendChild(filmCardTypeClass);

    let filmCardImdbIDClass = document.createElement("button");
    filmCardImdbIDClass.className += "film-card-ImdbID";
    let filmCardImdbID = filmCardBack.appendChild(filmCardImdbIDClass);

    filmCardTitle.innerHTML += item.Title;
    filmCardYear.innerHTML += item.Year;
    filmCardType.innerHTML += item.Type;
    filmCardImdbID.innerHTML += item.imdbID;
  });
  // reset list
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

/* Search field code */

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

/* Clear existing list function */

function clearList() {
  const parent = document.getElementById("film-list");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
  if (myInput.value === "zoek een titel") {
    myInput.value = " ";
  }
}
