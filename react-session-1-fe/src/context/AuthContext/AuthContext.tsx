import { createContext, useContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { Actions, AuthState } from "./AuthContext.types";

interface Props extends AuthState {
  login: (auth: LoginPayload) => void;
  register: (user: RegisterPayload) => void;
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  authenticatingStatus: "idle",
};

const AuthContext = createContext<Props>({ ...initialAuthState } as Props);

const reducer = (state: AuthState, action: Actions): AuthState => {
  switch (action.type) {
    case "LOGIN_REQUEST":
    case "REGISTER_REQUEST":
      return { ...state, authenticatingStatus: "loading" };

    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        ...state,
        authenticatingStatus: "success",
        user: action.payload,
        isAuthenticated: true,
      };

    case "LOGIN_FAILURE":
    case "REGISTER_FAILURE":
      return {
        ...state,
        authenticatingStatus: "rejected",
      };

    default:
      return state;
  }
};

const AuthContextProvider: React.FC<{ initialState?: AuthState }> = ({
  children,
  initialState = initialAuthState,
}) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, initialState);

  const onAuthSuccess = (authResponse: AuthResponse) => {
    history.push("/");
    sessionStorage.setItem("token", authResponse.jwt);
    sessionStorage.setItem("user", JSON.stringify(authResponse.user));
  };

  const login = async (auth: LoginPayload) => {
    dispatch({ type: "LOGIN_REQUEST" });
    try {
      const { data } = await axiosInstance.post<AuthResponse>(
        "/auth/local",
        auth
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      onAuthSuccess(data);
    } catch (e) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const register = async (user: RegisterPayload) => {
    dispatch({ type: "REGISTER_REQUEST" });
    try {
      const { data } = await axiosInstance.post<AuthResponse>(
        "/auth/local/register",
        user
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: data.user });
      onAuthSuccess(data);
    } catch (e) {
      dispatch({ type: "REGISTER_FAILURE" });
    }
  };

  const logout = async () => {
    // the API endpoint for logging out is /logout
  };

  useEffect(() => {
    dispatch({ type: "LOGIN_REQUEST" });

    const token = sessionStorage.getItem("token");
    const user = sessionStorage.getItem("user");

    if (token && user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(user) });
    } else {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, register, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
