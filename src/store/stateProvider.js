import { createStore } from "redux";

const reducerFunc = (state = { term: null }, action) => {
  if (action.type === "SET_SEARCH_TERM") {
    return {
      ...state,
      term: action.term,
    };
  }
  return state;
};

const StateContext = createStore(reducerFunc);

export default StateContext;
