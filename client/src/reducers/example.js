import { SET_EXAMPLE } from "./../actions/types";

const initialState = {
  example_1: "this is example one",
  example_2: "this is example two",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_EXAMPLE:
      return {
        ...state,
        example_1: payload.title,
      };
    default:
      return state;
  }
}
