import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Components
import PopularMovie from "./../movies/PopularMovie";
import SearchBar from "./../movies/SearchBar";
import MoviesGrid from "./../movies/MoviesGrid";
import LoadMoreButton from "./../movies/LoadMoreButton";
import Spinner from "./Spinner";

// Redux Actions
import { fetchMovies } from "./../../actions/movies";

const Home = ({ fetchMovies, fetchMoviesPending }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <>
      <PopularMovie />
      <SearchBar />
      <MoviesGrid />
      {fetchMoviesPending && <Spinner />}
      <LoadMoreButton />
    </>
  );
};

Home.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  fetchMoviesPending: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  fetchMoviesPending: state.movies.fetchMoviesPending,
});

export default connect(mapStateToProps, { fetchMovies })(Home);
