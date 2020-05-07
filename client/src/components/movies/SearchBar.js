import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Col, Row, FormGroup, Input } from "reactstrap";

//Redux Actions
import { setSearch } from "./../../actions/search";

const SearchBar = ({ setSearch, searchTerm }) => {
  const handleChange = (e) => setSearch(e.target.value);

  return (
    <Row>
      <Col md="6" className="mx-auto">
        <FormGroup>
          <Input
            value={searchTerm}
            type="search"
            name="search"
            placeholder="Search Movies"
            onChange={handleChange}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  searchTerm: state.search.searchTerm,
});

export default connect(mapStateToProps, { setSearch })(SearchBar);
