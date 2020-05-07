import React from "react";

// Components
import MovieBreadcrump from "./MovieBreadcrump";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import MovieActors from "./MovieActors";
import Spinner from "./../layout/Spinner";

const Movie = () => {
  return (
    <>
      <MovieBreadcrump />
      <MovieInfo />
      <MovieInfoBar />
      <MovieActors />
      <Spinner />
    </>
  );
};

export default Movie;
