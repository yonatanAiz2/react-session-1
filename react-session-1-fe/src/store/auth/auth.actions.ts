import {
  loginRequestAction,
  loginRequestFailure,
  loginRequestSuccess,
  registerRequestAction,
  registerRequestFailure,
  registerRequestSuccess,
} from "./auth.types";

export const loginRequest = (): loginRequestAction => ({
  type: "LOGIN_REQUEST",
});

export const loginSuccess = (
  payload: loginRequestSuccess["payload"]
): loginRequestSuccess => ({
  type: "LOGIN_SUCCESS",
  payload,
});

export const loginFailure = (): loginRequestFailure => ({
  type: "LOGIN_FAILURE",
});

export const registerRequest = (): registerRequestAction => ({
  type: "REGISTER_REQUEST",
});

export const registerSuccess = (
  payload: registerRequestSuccess["payload"]
): registerRequestSuccess => ({
  type: "REGISTER_SUCCESS",
  payload,
});

export const registerFailure = (): registerRequestFailure => ({
  type: "REGISTER_FAILURE",
});
