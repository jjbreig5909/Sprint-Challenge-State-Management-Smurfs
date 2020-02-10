import React, {useState} from "react";
import { connect } from "react-redux";
import { getData, addSmurf } from "../actions";


const SmurfForm = props => {
    const [newSmurfName, setNewSmurfName] = useState("");
    const [newSmurfAge, setNewSmurfAge] = useState("");
    const [newSmurfHeight, setNewSmurfHeight] = useState("");
    const [newSmurf, setNewSmurf] = useState({});
    console.log("YO THIS IS PROPS", props);

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
   
  const handleNameChanges = e => {
      setNewSmurf({...newSmurf, name: e.target.value});
    };
    
  const handleAgeChanges = e => {
    setNewSmurf({ ...newSmurf, age: e.target.value });
  };

  const handleHeightChanges = e => {
    setNewSmurf({ ...newSmurf, height: e.target.value });
  };

  const handleAddSmurf = e => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    console.log("THIS IS THE NEW SMURF", newSmurf);
  };

  return (
    <div>
      <div>
        {props.isFetchingData ? (
          <div>Fetching Smurfs!!</div>
        ) : (
          <button className="smurf-button" onClick={handleGetData}>
            Find Smurfs
          </button>
        )}
      </div>
      <div>
        <h2>Wanna Add a Smurf?</h2>
        <div className="smurf-inputs">
          <input
            className="smurf-input"
            type="text"
            value={newSmurf.name}
            onChange={handleNameChanges}
            placeholder="Smurf Name"
          />
          <input
            className="smurf-input"
            type="text"
            value={newSmurf.height}
            onChange={handleHeightChanges}
            placeholder="Smurf Height"
          />
          <input
            className="smurf-input"
            type="text"
            value={newSmurf.age}
            onChange={handleAgeChanges}
            placeholder="Smurf Age"
          />
          <button className="smurf-button" onClick={handleAddSmurf}>
            Add Smurf!
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData, addSmurf })(SmurfForm);
