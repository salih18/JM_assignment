import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const MovieBreadcrump = ({ movie: { original_title } }) => {
  return (
    <div>
      <Breadcrumb className="py-4">
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{original_title}</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

MovieBreadcrump.propTypes = {
  movie: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie.data,
});

export default connect(mapStateToProps, {})(MovieBreadcrump);
