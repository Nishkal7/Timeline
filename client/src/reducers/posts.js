export default (state = [], action) => {
  switch (action.type) {
    case "DELETE":
      return state.filter((post) => post._id !== action.payload);
    case "FETCH_ALL":
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPAges: action.payload.numberOfPages
      };
    case "FETCH_BY_SEARCH":
      return {
        ...state,
        posts : action.payload
      };
    case "CREATE":
      return [...state, action.payload];
    case "UPDATE":
    case "LIKE":
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return state;
  }
};
