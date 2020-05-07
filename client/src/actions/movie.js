import axios from "axios";
import { FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR } from "./types";

import { API_URL, API_KEY } from "./../utils/config";

export const fetchMovie = (movieId) => async (dispatch) => {
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  const movieEndpoint = `${API_URL}/movie/${movieId}?api_key=${API_KEY}`;
  const creditsEndpoint = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

  try {
    dispatch({ type: FETCH_MOVIE });
    const movie = await axios.get(movieEndpoint);
    const creditsResult = await axios.get(creditsEndpoint);

    dispatch({
      type: FETCH_MOVIE_SUCCESS,
      payload: { movie: movie.data, credits: creditsResult.data },
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_MOVIE_ERROR, payload: err });
  }
};
