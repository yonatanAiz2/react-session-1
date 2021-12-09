import styled, { css } from "styled-components/macro";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ hasIcon: boolean }>`
  width: 100%;
  ${({ hasIcon }) =>
    hasIcon
      ? css`
          padding: 0 48px 0 24px;
        `
      : css`
          padding: 0 24px;
        `}
  height: 40px;
  border-radius: 32px;
  font-size: 16px;
  border: 1px solid #333;
  background-color: #eee;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-45%);
`;

export const ErrorText = styled.small`
  color: red;
  margin-left: 10px;
`;
