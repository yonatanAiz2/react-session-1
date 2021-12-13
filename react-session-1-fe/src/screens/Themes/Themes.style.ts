import styled from "styled-components/macro";

export const MainContainer = styled.div<{ isSideBarOpened: boolean }>`
  transition: width 0.5s ease;
  width: ${({ isSideBarOpened }) =>
    isSideBarOpened ? "calc(100% - 480px)" : "100%"};
`;

export const ThemesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 3rem;
`;
