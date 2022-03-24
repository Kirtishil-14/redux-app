const initialState = "KirTiShiL";
const showName = (state = initialState, action) => {
  if (action.type === "small") {
    return state.toLowerCase();
  }
  else if (action.type === "big") {
    return state.toUpperCase();
  }
  return state;
}

export default showName;