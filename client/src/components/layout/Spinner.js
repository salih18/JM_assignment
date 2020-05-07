import React from "react";
import { Spinner as RSpinner } from "reactstrap";

const Spinner = (props) => {
  return (
    <div className='text-center'>
      <RSpinner style={{ width: "3rem", height: "3rem" }} />{" "}
    </div>
  );
};

export default Spinner;
