import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_MISSIONS = "UPDATE_MISSIONS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error("error fetching data from api. err: ", err);
      });
  }, 2000);
};
