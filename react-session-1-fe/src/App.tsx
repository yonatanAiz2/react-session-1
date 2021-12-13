import { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./style/GlobalStyle.style";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components/macro";
import AppThemeProvider from "./context/AppThemeContext";
import { Spinner } from "./components/Spinner/Spinner";

const Login = lazy(() => import("./screens/Login/Login"));
const Register = lazy(() => import("./screens/Register/Register"));
const Profile = lazy(() => import("./screens/Profile/Profile"));
const Themes = lazy(() => import("./screens/Themes/Themes"));
const AddTheme = lazy(() => import("./screens/AddTheme/AddTheme"));

function App() {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        {(theme) => (
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
              <Suspense fallback={<Spinner />}>
                <Switch>
                  <Route path="/" exact component={Themes} />
                  <Route path="/themes/:id" component={Themes} />
                  <Route path="/add-theme" component={AddTheme} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route path="/profile" component={Profile} />
                </Switch>
              </Suspense>
            </Layout>
          </ThemeProvider>
        )}
      </AppThemeProvider>
    </BrowserRouter>
  );
}

export default App;
