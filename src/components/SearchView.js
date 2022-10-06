import { Link } from "react-router-dom";
import Hero from "./Hero";
// TMDB API dff885a46cec10641b6714f86582cab0
// https://api.themoviedb.org/3/search/movie?api_key=dff885a46cec10641b6714f86582cab0&language=en-US&query=star%20wars&page=1&include_adult=false

// API example : https://api.themoviedb.org/3/movie/{movie_id}?api_key=dff885a46cec10641b6714f86582cab0&language=en-US
const MovieCard = ({ movie }) => {
  const posterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const detailUrl = `/movie/${movie.id}`;
  return (
    <div className="col-lg-2 col-md-3 col-2">
      <div className="card">
        <img
          src={posterURL}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResult }) => {
  const title = `You are searching for ${keyword}`;

  const resultantHtml = searchResult.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  }); // filters and returns the title of the movie

  return (
    <>
      <Hero text={title} />
      {resultantHtml && (
        <div className="container">
          <div className="row">{resultantHtml}</div>
        </div>
        // this enables the movies to appear in a row an wrapped in a container for a better view. This is acheived with the div className col-lg-2 col-md-3 above.
      )}
    </>
  );
};

export default SearchView;
