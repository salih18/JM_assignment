import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Jumbotron, Row, Col } from "reactstrap";

import { IMAGE_BASE_URL } from "./../../utils/config";

const MovieInfo = ({ movie }) => {
  const movieBackground = IMAGE_BASE_URL + "w1280" + movie.backdrop_path;
  const movieImageStyle = { backgroundImage: "url(" + movieBackground + ")" };
  return (
    <div>
      <Jumbotron
        className="jumbotron-cover-image d-flex flex-column justify-content-between rounded-0"
        style={movieImageStyle}
      >
        <Row>
          <Col className="justify-content-center" md="8">
            <div className="layout">
              <h1 className="display-3">{movie.title}</h1>
              <p className="lead">{movie.overview}</p>
              <h3>IMDB RATING</h3>
              <h1>
                <span className="badge badge-secondary">
                  {movie.vote_average}
                </span>{" "}
              </h1>
              <hr className="my-2" />
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie.data,
});

export default connect(mapStateToProps, {})(MovieInfo);
