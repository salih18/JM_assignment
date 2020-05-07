import axios from "axios";
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from "./types";

import { API_URL, API_KEY } from "./../utils/config";

export const fetchMovies = () => async (dispatch) => {
  //api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
  const popularEndpoint = `${API_URL}/movie/popular?api_key=${API_KEY}`;

  try {
    dispatch({ type: FETCH_MOVIES });
    const res = await axios.get(popularEndpoint);
    dispatch({
      type: FETCH_MOVIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_MOVIES_ERROR, payload: err });
  }
};
