import {
    FETCH_MOVIE,
    FETCH_MOVIE_ERROR,
    FETCH_MOVIE_SUCCESS,
  } from "./../actions/types";
  
  const initialState = {
    data: {},
    actors:[],
    fetchMoviePending: false,
    fetchMovieError: false,
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case FETCH_MOVIE:
        return {
          ...state,
          fetchMoviePending: true,
        };
        case FETCH_MOVIE_SUCCESS:
          return {
            ...state,
            data: payload.movie,
            actors:payload.credits.cast,
            fetchMoviePending: false,
          };
      case FETCH_MOVIE_ERROR:
        return {
          ...state,
          fetchMovieError: payload,
          fetchMoviePending: false,
        };
      default:
        return state;
    }
  }
  