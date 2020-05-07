import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Button } from "reactstrap";

// Redux Actions
import { fetchMovies } from "./../../actions/movies";

const LoadMoreButton = ({ currentPage, fetchMovies }) => {
  const handleClick = () => {
    fetchMovies(currentPage);
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
};

const mapStateToProps = (state) => ({
  currentPage: state.movies.currentPage,
});

export default connect(mapStateToProps, { fetchMovies })(LoadMoreButton);
