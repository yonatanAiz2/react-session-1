import { Actions, AuthState } from "./auth.types";

const initialState: AuthState = {
  isAuthenticated: false,
  authenticatingStatus: "idle",
  token: "",
};

export const authReducer = (
  state = initialState,
  action: Actions
): AuthState => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "REGISTER_REQUEST":
      return { ...state, authenticatingStatus: "loading" };

    case "LOGIN_SUCCESS":
      return {
        authenticatingStatus: "success",
        user: action.payload.user,
        token: action.payload.jwt,
        isAuthenticated: true,
      };

    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return {
        authenticatingStatus: "rejected",
        user: undefined,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
