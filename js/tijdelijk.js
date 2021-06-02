const makeMovieList = (choise) => {
  console.log("in makeMovieList: " + choise);

  if (choise != "nieuwste-films") {
    for (a = 0; a < movies.length; a++) {
      if (movies[a].Title.indexOf(choise) > -1) {
        console.log("choise in if: " + choise + "  " + a);
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
