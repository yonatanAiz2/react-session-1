import { FC } from "react";
import styled from "styled-components/macro";
import Navbar from "./Navbar/Navbar";

const Container = styled.main`
  padding: 72px 120px 0 120px;
`;

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
