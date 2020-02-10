export const initialState = {

};

export const smurfReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    default:
      return state;
  }
};
