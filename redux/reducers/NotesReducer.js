import { ADD_NOTE,DELETE_NOTE} from "../constants";
let initialState = [];
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      let result = state.filter(item=>{
        return item.heading != action.payload
      })
      return [...result]
    default:
      return state;
  }
};
