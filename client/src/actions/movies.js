import axios from "axios";
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  LOAD_MORE,
  LOAD_MORE_SUCCESS,
  LOAD_MORE_ERROR,
} from "./types";

import { API_URL, API_KEY } from "./../utils/config";

export const fetchMovies = (currentPage = "") => async (dispatch) => {
  //api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
  const popularEndpoint = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${
    currentPage + 1
  }`;

  const isLoadMore = Boolean(currentPage);

  try {
    isLoadMore
      ? dispatch({ type: LOAD_MORE })
      : dispatch({ type: FETCH_MOVIES });

    const res = await axios.get(popularEndpoint);

    isLoadMore
      ? dispatch({
          type: LOAD_MORE_SUCCESS,
          payload: res.data,
        })
      : dispatch({
          type: FETCH_MOVIES_SUCCESS,
          payload: res.data,
        });
  } catch (err) {
    console.log(err);
    isLoadMore
      ? dispatch({ type: LOAD_MORE_ERROR, payload: err })
      : dispatch({ type: FETCH_MOVIES_ERROR, payload: err });
  }
};
