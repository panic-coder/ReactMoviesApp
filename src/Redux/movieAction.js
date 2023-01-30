import { LOAD_MOVIES, UPDATE_SEARCH_BOX,SEARCHBOXSELTED } from "./types";

export const loadMovies = (movies) => {
  return {
    type: LOAD_MOVIES,
    payload: movies,
  };
};

export const updateSearchBox = (searchText) => {
  return {
    type: UPDATE_SEARCH_BOX,
    payload: searchText,
  };
};

export const updateSelection = (selection) => {
  return {
    type: SEARCHBOXSELTED,
    payload: selection,
  };
};

