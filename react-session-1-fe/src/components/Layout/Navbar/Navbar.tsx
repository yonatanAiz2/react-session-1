import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import * as S from "./Navbar.style";

const Navbar = () => {
  return (
    <S.Navbar>
      <img src="/assets/logo.png" alt="logo" />
      <S.LinksContainer>
        <ul>
          <li>
            <Link to="/">main</Link>
          </li>
          <li>
            <Link to="/create-theme">
              {/* <Button colorType="primary">Create theme</Button> */}
            </Link>
          </li>
        </ul>
        <Link to="/profile">
          <S.Profile>?</S.Profile>
        </Link>
      </S.LinksContainer>
    </S.Navbar>
  );
};

export default Navbar;
