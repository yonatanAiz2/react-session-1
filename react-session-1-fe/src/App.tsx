import Layout from "./components/Layout/Layout";
import Themes from "./screens/Themes/Themes";
import AddTheme from "./screens/AddTheme/AddTheme";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import Profile from "./screens/Profile/Profile";
import { GlobalStyle } from "./style/GlobalStyle.style";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Themes />
        <AddTheme />
        <Login />
        <Register />
        <Profile />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
