import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Col, CardImg, CardGroup, Container } from "reactstrap";

import { IMAGE_BASE_URL } from "./../../utils/config";

const MoviesGrid = ({ movies, search }) => {
  return (
    <Container>
      <h1 className="text-center display-4 mb-5">
        {search.searchTerm ? "Search Result" : "Popular Movies"}
      </h1>

      <CardGroup>
        {movies.map((movie) => (
          <Col md="3" key={movie.id} className="mb-4">
            <Link to={`/movies/${movie.id}`}>
              <CardImg
                top
                width="100%"
                src={IMAGE_BASE_URL + "w500" + movie.poster_path}
                alt={`${movie.title} image`}
              />
            </Link>
          </Col>
        ))}
      </CardGroup>
    </Container>
  );
};

MoviesGrid.propTypes = {
  movies: PropTypes.array.isRequired,
  search: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies.data,
  search: state.search,
});

export default connect(mapStateToProps, {})(MoviesGrid);
