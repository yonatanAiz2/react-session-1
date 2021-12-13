interface loginRequestAction {
  type: "LOGIN_REQUEST";
}

interface loginRequestSuccess {
  type: "LOGIN_SUCCESS";
  payload: User;
}

interface loginRequestFailure {
  type: "LOGIN_FAILURE";
}

interface registerRequestAction {
  type: "REGISTER_REQUEST";
}

interface registerRequestSuccess {
  type: "REGISTER_SUCCESS";
  payload: User;
}

interface registerRequestFailure {
  type: "REGISTER_FAILURE";
}

export type Actions =
  | loginRequestAction
  | loginRequestSuccess
  | loginRequestFailure
  | registerRequestAction
  | registerRequestSuccess
  | registerRequestFailure;

export interface AuthState {
  isAuthenticated: boolean;
  user?: User;
  authenticatingStatus: StateStatus;
}
