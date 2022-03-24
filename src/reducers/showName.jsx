const initialState = "Kirtishil";
const showName = (state = initialState, action) => {
  if (action.type === "Name") {
    return state.toLowerCase();
  }
  return state;
}

export default showName;