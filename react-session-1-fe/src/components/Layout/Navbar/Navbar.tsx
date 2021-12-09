// import { a } from "react-router-dom";
import Button from "../../Button/Button";
import * as S from "./Navbar.style";

const Navbar = () => {
  return (
    <S.Navbar>
      <img src="/assets/logo.png" alt="logo" />
      <S.LinksContainer>
        <ul>
          <li>
            <a href="/">main</a>
          </li>
          <li>
            <a href="/create-theme">
              <Button colorType="primary">Create theme</Button>
            </a>
          </li>
        </ul>
        <a href="/profile">
          <S.Profile>?</S.Profile>
        </a>
      </S.LinksContainer>
    </S.Navbar>
  );
};

export default Navbar;
