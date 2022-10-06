import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams(); // this gives information about the movie
  console.log(id);

  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dff885a46cec10641b6714f86582cab0&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetail(data);
          setIsLoading(false);
        }, 1000);
      });
  }, [id]);

  const renderMovieDetail = () => {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetail) {
      <Hero text={movieDetail.original_title} />;

      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`;

      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`;

      return (
        <>
          <Hero text={movieDetail.original_title} backdrop={backdropUrl} />

          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetail.original_title}</h2>
                <p className="lead">{movieDetail.overview}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  return renderMovieDetail();
};
export default MovieView;
