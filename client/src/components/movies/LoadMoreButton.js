import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Button } from "reactstrap";

// Redux Actions
import { fetchMovies } from "./../../actions/movies";

const LoadMoreButton = ({ currentPage, fetchMovies, searchTerm }) => {
  const handleClick = () => {
    fetchMovies(searchTerm, currentPage);
  };
  return (
    <Container className="d-flex justify-content-center">
      <Button
        color="secondary"
        size="lg"
        className="px-5 py-3 m-4"
        onClick={handleClick}
      >
        Load More
      </Button>
    </Container>
  );
};

LoadMoreButton.propTypes = {
  currentPage: PropTypes.number.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

const mapStateToProps = (state) => ({
  currentPage: state.movies.currentPage,
  searchTerm: state.search.searchTerm,
});

export default connect(mapStateToProps, { fetchMovies })(LoadMoreButton);
