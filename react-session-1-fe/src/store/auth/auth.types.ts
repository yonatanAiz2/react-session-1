export interface AuthState {
  isAuthenticated: boolean;
  user?: User;
  authenticatingStatus: StateStatus;
  token?: string;
}

export interface loginRequestAction {
  type: "LOGIN_REQUEST";
}

export interface loginRequestSuccess {
  type: "LOGIN_SUCCESS";
  payload: AuthResponse;
}

export interface loginRequestFailure {
  type: "LOGIN_FAILURE";
}

export interface registerRequestAction {
  type: "REGISTER_REQUEST";
}

export interface registerRequestSuccess {
  type: "REGISTER_SUCCESS";
  payload: AuthResponse;
}

export interface registerRequestFailure {
  type: "REGISTER_FAILURE";
}

export type Actions =
  | loginRequestAction
  | loginRequestSuccess
  | loginRequestFailure
  | registerRequestAction
  | registerRequestSuccess
  | registerRequestFailure;
