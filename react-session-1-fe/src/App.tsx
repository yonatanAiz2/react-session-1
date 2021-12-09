import Layout from "./components/Layout/Layout";
import Themes from "./screens/Themes/Themes";
import { GlobalStyle } from "./style/GlobalStyle.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Themes />
      </Layout>
    </>
  );
}

export default App;
