import { RouteProps, Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { Spinner } from "../Spinner/Spinner";

export const ProtectedRoute = (props: RouteProps) => {
  const { isAuthenticated, authenticatingStatus } = useAuthContext();

  if (authenticatingStatus === "idle" || authenticatingStatus === "loading") {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
};

export const AuthRoute = (props: RouteProps) => {
  const { isAuthenticated, authenticatingStatus } = useAuthContext();

  if (authenticatingStatus === "idle" || authenticatingStatus === "loading") {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
};
