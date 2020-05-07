import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import MovieBreadcrump from "./MovieBreadcrump";
import MovieInfo from "./MovieInfo";
// import MovieInfoBar from "./MovieInfoBar";
import MovieActors from "./MovieActors";
import Spinner from "./../layout/Spinner";

//Redux Actions
import { fetchMovie } from "../../actions/movie";

const Movie = ({
  match: {
    params: { id },
  },
  fetchMovie,
  fetchMoviePending,
}) => {
  useEffect(() => {
    fetchMovie(id);
  }, [fetchMovie, id]);
  return fetchMoviePending ? (
    <Spinner />
  ) : (
    <>
      <MovieBreadcrump />
      <MovieInfo />
      {/* <MovieInfoBar /> // @todo */}
      <MovieActors />
    </>
  );
};

Movie.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
  fetchMoviePending: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  fetchMoviePending: state.movie.fetchMoviePending,
});

export default connect(mapStateToProps, { fetchMovie })(Movie);
