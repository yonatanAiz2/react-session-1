import styled from "styled-components/macro";

export const CardContainer = styled.div`
  width: 100%;
  min-width: 300px;
  height: 310px;
`;
export const ColorsContainer = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 16px;
  border: 1px solid #333;
  display: flex;
`;

export const Color = styled.div<{ color: string }>`
  width: 25%;
  height: 100%;
  background-color: ${({ color }) => color};
  :first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  :last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  align-items: center;
`;
