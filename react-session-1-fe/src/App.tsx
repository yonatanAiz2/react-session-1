import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./style/GlobalStyle.style";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";
import AppThemeProvider from "./context/AppThemeContext";
import { Spinner } from "./components/Spinner/Spinner";
import AuthContextProvider from "./context/AuthContext/AuthContext";
import {
  AuthRoute,
  ProtectedRoute,
} from "./components/AuthComponents/AuthRoutes";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const Login = lazy(() => import("./screens/Login/Login"));
const Register = lazy(() => import("./screens/Register/Register"));
const Profile = lazy(() => import("./screens/Profile/Profile"));
const Themes = lazy(() => import("./screens/Themes/Themes"));
const AddTheme = lazy(() => import("./screens/AddTheme/AddTheme"));

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AppThemeProvider>
          {(theme) => (
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Layout>
                <Suspense fallback={<Spinner />}>
                  <Switch>
                    <Route path="/" exact component={Themes} />
                    <Route path="/themes/:id" component={Themes} />
                    <ProtectedRoute path="/add-theme" component={AddTheme} />
                    <ErrorBoundary>
                      <ProtectedRoute path="/profile" component={Profile} />
                    </ErrorBoundary>
                    <AuthRoute path="/login" component={Login} />
                    <AuthRoute path="/register" component={Register} />
                  </Switch>
                </Suspense>
              </Layout>
            </ThemeProvider>
          )}
        </AppThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
