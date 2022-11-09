import {
  REGISTER_FORM_UPDATE,
  SEND_OTP_INIT,
  SEND_OTP_SUCC,
  SEND_OTP_FAIL,
} from '../types';

/**************************************Update prop values ****************************************************/
export const registerFormUpdate = (prop, value) => {
  return {
    type: REGISTER_FORM_UPDATE,
    payload: {prop, value},
  };
};
