import styled from "styled-components/macro";

export const SideBar = styled.aside<{ isSideBarOpened: boolean }>`
  position: fixed;
  transition: width 0.5s ease;
  top: 72px;
  right: 0;
  background: #333;
  width: ${({ isSideBarOpened }) => (isSideBarOpened ? "450px" : 0)};
  padding: ${({ isSideBarOpened }) => (isSideBarOpened ? "16px" : 0)};
  height: calc(100vh - 72px);
  box-shadow: -3px 0px 4px rgba(0, 0, 0, 0.25);
  color: #eee;
  h2 {
    font-size: 40px;
    margin: 8px 0 0;
  }
  p {
    margin: 0;
  }
  ul {
    width: 200px;
    margin: 4px auto;
    li {
      text-decoration: underline;
      a {
        color: #eee;
      }
    }
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    font-size: 24px;
    color: #eee;
  }
  button {
    :last-child {
      margin-left: 10px;
    }
  }
`;

export const ColorContainer = styled.div`
  margin-top: 16px;
`;

export const ColorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 400;
    margin: 0;
  }
`;

export const Color = styled.div<{ color: string }>`
  width: 100%;
  border-radius: 16px;
  height: 64px;
  background-color: ${({ color }) => color};
  margin: 16px 0;
`;

export const ColorFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
