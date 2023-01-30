import { LOAD_MOVIES, UPDATE_SEARCH_BOX ,SEARCHBOXSELTED} from "./types";

const initialState = {
isSerachboxSelected:false,
searchBoxText: "",
movieData: undefined,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movieData: action.payload,
      };
    case UPDATE_SEARCH_BOX:
      return {
        ...state,
        searchBoxText: action.payload,
          };
    case UPDATE_SEARCH_BOX:
      return {
        ...state,
        isSerachboxSelected: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
