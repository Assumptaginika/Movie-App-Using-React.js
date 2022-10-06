import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=dff885a46cec10641b6714f86582cab0&language=en-US&query=${searchText}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.results);
          // the setSearchResult is invoked to convert the data.results which is an object to an array so that it can be easy to loop through
        });
    }
  }, [searchText]);

  return (
    <Router>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <SearchView keyword={searchText} searchResult={searchResult} />
        </Route>
        <Route path="/movie/:id">
          <MovieView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// THE application fetches an API, and also filters the API to fetch the desired movie.

//The app made use of bootstrap cards, to enhance the appearance of each of the movies rendered to be responsive in all devices.

// i also pulls data from the URL in th form of API inside the application to give  the details of the movie, the movie details provided makes it  easy for users to know more about the movie and then make a decision on whether to proceed on seeing it or not.

// it is equally built functionlities ton accomodate those with slow internet access. like the setTimeout.
