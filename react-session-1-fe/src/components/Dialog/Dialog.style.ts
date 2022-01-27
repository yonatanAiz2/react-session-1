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
