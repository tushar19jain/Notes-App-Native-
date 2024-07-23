import { ADD_TO_FAV, REMOVE_FROM_FAV, DELETE_NOTE } from "../constants";

let initialState = [];
export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return [...state, action.payload];
    case REMOVE_FROM_FAV: {
      let newState = state.filter((item) => {
        return item.heading != action.payload;
      });
      return [...newState];
    }
    case DELETE_NOTE:
      let result = state.filter((item) => {
        return item.heading != action.payload;
      });
      return [...result];
    default:
      return [...state];
  }
};
