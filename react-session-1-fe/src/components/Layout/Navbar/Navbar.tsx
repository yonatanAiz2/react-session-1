import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext/AuthContext";
import Button from "../../Button/Button";
import * as S from "./Navbar.style";

const Navbar = () => {
  const { isAuthenticated, user } = useAuthContext();
  return (
    <S.Navbar>
      <img src="/assets/logo.png" alt="logo" />
      <S.LinksContainer>
        <ul>
          <li>
            <Link to="/">main</Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link to="/add-theme">
                <Button colorType="primary">Create theme</Button>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/register">register</Link>
              </li>
            </>
          )}
        </ul>
        <Link to="/profile">
          <S.Profile>
            {user?.username ? user.username[0].toUpperCase() : "?"}
          </S.Profile>
        </Link>
      </S.LinksContainer>
    </S.Navbar>
  );
};

export default Navbar;
