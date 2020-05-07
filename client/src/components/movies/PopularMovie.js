import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Row, Col } from "reactstrap";

import { IMAGE_BASE_URL } from "./../../utils/config";

//Components
import Navbar from "./../layout/Navbar";
import SearchBar from "./SearchBar";

//Popular Image Style
import "./PopularMovie.css";

const PopularMovie = ({
  popularMovie: { backdrop_path, original_title, overview, id },
}) => {
  const popularBackground = IMAGE_BASE_URL + "w1280" + backdrop_path;
  const popularStyle = { backgroundImage: "url(" + popularBackground + ")" };

  return (
    <Jumbotron
      className="jumbotron-cover-image d-flex flex-column justify-content-between rounded-0"
      style={popularStyle}
    >
      <Navbar color="faded" dark={true} light={false} />
      <SearchBar />

      <Row md="8">
        <Col className="justify-content-center" md="8">
          <div className="layout">
            <h1 className="display-3">{original_title}</h1>
            <p className="lead">{overview}</p>
            <hr className="my-2" />
            <p className="lead">
              <Link to={`/movies/${id}`}>
                <Button color="primary">Learn More</Button>
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Jumbotron>
  );
};

PopularMovie.propTypes = {
  popularMovie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  popularMovie: state.movies.popularMovie,
});

export default connect(mapStateToProps, {})(PopularMovie);
