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
              <h3 className="smurf-name">{smurf.name}</h3>
              <div className="smurf-info">
                <div>Age: {smurf.age}</div>
                <div>Height: {smurf.height}</div>
              </div>
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
