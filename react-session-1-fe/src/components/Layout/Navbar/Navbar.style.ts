import styled from "styled-components/macro";

export const Navbar = styled.nav`
  width: 100%;
  height: 72px;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 100;
  img {
    width: 190px;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin-right: 16px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Profile = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  /* background-color: ${({ theme }) => theme.secondary}; */
  background-color: orangered;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
`;
