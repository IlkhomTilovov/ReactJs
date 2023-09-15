import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  margin: 20px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 10px;
  width: 200px;
  height: 40px;
  background-color: coral;
  border-radius: 8px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
export const ActiveButton = styled(Button)`
  animation: ${rotate} 2s linear infinite;
`;
