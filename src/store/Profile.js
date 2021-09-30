import { EDIT_PROFILE } from "./types/ProfileTypes";

const initialState = {
  profileChecked: false,
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_PROFILE:
      return {
        ...state,
        profileChecked: payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
