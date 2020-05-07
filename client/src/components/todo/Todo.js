import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { getExample } from "./../../actions/example";

const Todo = ({ todos, match, getExample }) => {
  console.log({ todos });
  console.log({ match });

  const handleClick = () => {
    getExample(2);
  };
  return (
    <div>
      <h2>Todos</h2>
      <p>{todos.example_1}</p>
      <p>{todos.example_2}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.example,
});

export default connect(mapStateToProps, { getExample })(Todo);
