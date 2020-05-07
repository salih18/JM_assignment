import { SET_SEARCH } from "./types";

export const setSearch = (searchTerm) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SEARCH,
      payload: searchTerm,
    });
  } catch (err) {
    console.log(err);
  }
};
