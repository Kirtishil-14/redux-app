const initialState = 0;
const changeNum = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
}

export default changeNum;