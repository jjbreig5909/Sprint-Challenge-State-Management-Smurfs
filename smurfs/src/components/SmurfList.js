import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const SmurfList = props => {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurfs.map(smurf => {
          return (
            <div className="smurf-card">
              <div className="smurf-name">{smurf.name}</div>
              <div className="smurf-name">{smurf.age}</div>
              <div className="smurf-name">{smurf.height}</div>
            </div>
          );})
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { getData })(SmurfList);
