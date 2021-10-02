import { EDIT_PROFILE } from "../store/types/ProfileTypes";

export const profileAction = (checked) => ({
  type: EDIT_PROFILE,
  payload: checked,
});
