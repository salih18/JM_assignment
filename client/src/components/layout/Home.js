import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Components
import PopularMovie from "./../movies/PopularMovie";
import MoviesGrid from "./../movies/MoviesGrid";
import LoadMoreButton from "./../movies/LoadMoreButton";
import Spinner from "./Spinner";

// Redux Actions
import { fetchMovies } from "./../../actions/movies";

const Home = ({ fetchMovies, fetchMoviesPending, searchTerm }) => {
  const timeOut = useRef(null);

  // if there is not search case
  useEffect(() => {
    !searchTerm && fetchMovies();
  }, [fetchMovies, searchTerm]);

  // if there is search, search after 2s
  useEffect(() => {
    timeOut.current = setTimeout(() => {
      searchTerm && fetchMovies(searchTerm);
    }, 2000);

    return () => {
      clearTimeout(timeOut.current);
    };
  }, [fetchMovies, searchTerm]);
  return (
    <>
      <PopularMovie />
      <MoviesGrid />
      {fetchMoviesPending && <Spinner />}
      <LoadMoreButton />
    </>
  );
};

Home.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  fetchMoviesPending: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
};

const mapStateToProps = (state) => ({
  fetchMoviesPending: state.movies.fetchMoviesPending,
  searchTerm: state.search.searchTerm,
});

export default connect(mapStateToProps, { fetchMovies })(Home);
