import { useSelector } from "react-redux";
import { RouteProps, Route, Redirect } from "react-router-dom";
import { authStateSelector } from "../../store/auth/auth.selectors";
import { Spinner } from "../Spinner/Spinner";

export const ProtectedRoute = (props: RouteProps) => {
  const { isAuthenticated, authenticatingStatus } =
    useSelector(authStateSelector);

  if (authenticatingStatus === "loading") {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
};

export const AuthRoute = (props: RouteProps) => {
  const { isAuthenticated, authenticatingStatus } =
    useSelector(authStateSelector);

  if (authenticatingStatus === "loading") {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return <Route {...props} />;
  }

  return <Redirect to="/" />;
};
