import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCESS,
  LOAD_MORE,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_ERROR,
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
    case LOAD_MORE:
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
    case LOAD_MORE_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...payload.results],
        currentPage: payload.page,
        fetchMoviesPending: false,
      };
    case FETCH_MOVIES_ERROR:
    case LOAD_MORE_ERROR:
      return {
        ...state,
        fetchMoviesError: payload,
        fetchMoviesPending: false,
      };
    default:
      return state;
  }
}
