import {
  REGISTER_FORM_UPDATE,
  SEND_OTP_INIT,
  SEND_OTP_SUCC,
  SEND_OTP_FAIL,
} from '../types';

const INITIAL_STATE = {
  email: '',
  password: '',
  fullName: "",
  dob: "",
  gender: "",
  universityName: "",
  loader: false,
};

/************************************** Register reducer ****************************************************/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_FORM_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case SEND_OTP_INIT:
      return {...state, loader: true};
    case SEND_OTP_SUCC:
      return {...state, loader: false, email: action.payload};
    case SEND_OTP_FAIL:
      return {...state, loader: false};
    default:
      return state;
  }
};
