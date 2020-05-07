import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
} from "./../actions/types";

const initialState = {
  data: [],
  popularMovie: {},
  currentPage: 1,
  fetchMoviesPending: false,
  fetchMoviesError: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        fetchMoviesPending: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: payload.results,
        popularMovie: payload.results[0],
        fetchMoviesPending: false,
        currentPage: payload.page,
      };

    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        fetchMoviesError: payload,
        fetchMoviesPending: false,
      };
    default:
      return state;
  }
}
