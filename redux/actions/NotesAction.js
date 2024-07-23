import {
  ADD_NOTE,
  ADD_TO_FAV,
  DELETE_NOTE,
  REMOVE_FROM_FAV,
  SEARCHED_NOTES,
} from "../constants.js";
export function addNotes(item) {
  return {
    type: ADD_NOTE,
    payload: item,
  };
}
export function deleteNotes(item) {
  return {
    type: DELETE_NOTE,
    payload: item,
  };
}
export function addToFav(item) {
  return {
    type: ADD_TO_FAV,
    payload: item,
  };
}
export function removeFromFav(item) {
  return {
    type: REMOVE_FROM_FAV,
    payload: item,
  };
}
export function searchedNotes(item) {
  return {
    type: SEARCHED_NOTES,
    payload: item,
  };
}
