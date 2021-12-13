import Layout from "./components/Layout/Layout";
import Themes from "./screens/Themes/Themes";
import AddTheme from "./screens/AddTheme/AddTheme";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Profile from "./screens/Profile/Profile";
import { GlobalStyle } from "./style/GlobalStyle.style";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Switch>
          <Route path="/" exact component={Themes} />
          <Route path="/themes/:id" component={Themes} />
          <Route path="/add-theme" component={AddTheme} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
