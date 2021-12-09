import styled, { css } from "styled-components/macro";

const primary = css`
  background-color: ${({ theme }) => theme.primary};
  border-style: none;
  color: #ffffff;
  transition: opacity 100ms;
  :hover,
  :focus {
    opacity: 0.9;
  }
`;

const secondary = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  transition: all 100ms;
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const buttonColorTypes = {
  primary,
  secondary,
};

export const Button = styled.button<{ colorType: "primary" | "secondary" }>`
  ${({ colorType }) => buttonColorTypes[colorType]}
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  height: 40px;
  line-height: 20px;
  padding: 10px 16px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :disabled {
    background-color: #555;
    cursor: no-drop;
    opacity: 0.5;
    &:hover {
      opacity: 0.5;
    }
  }
`;
