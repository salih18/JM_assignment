import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Col, CardImg, CardGroup, Container } from "reactstrap";

import { IMAGE_BASE_URL } from "./../../utils/config";

import NoImage from "./../../images/NoImage.jpeg";

const MovieActors = ({ actors }) => {
  return (
    <Container>
      <h1 className="text-center display-4 mb-5">Actors</h1>
      <CardGroup>
        {actors.map((actor) => (
          <Col md="3" key={actor.cast_id} className="mb-4">
            <Link to={`/movies/${actor.cast_id}`}>
              <CardImg
                top
                width="100%"
                src={
                  actor.profile_path
                    ? IMAGE_BASE_URL + "w500" + actor.profile_path
                    : NoImage
                }
                alt="Card image cap"
              />
            </Link>
          </Col>
        ))}
      </CardGroup>
    </Container>
  );
};

MovieActors.propTypes = {
  actors: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  actors: state.movie.actors,
});

export default connect(mapStateToProps, {})(MovieActors);
