const contextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return state.filter((t) => t.id !== action.payload);
    case "DELETE_TRANSACTION":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default contextReducer;
