import styled from "styled-components/macro";

export const Dialog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
`;
export const DialogInnerContainer = styled.div`
  background: ${({ theme }) => theme.background};
  padding: 30px;
  border-radius: 16px;
  -webkit-box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.63);
  text-align: left;
`;

export const DialogButtonContainer = styled.div`
  display: flex;

  & > * {
    margin-right: 8px;
  }
`;
