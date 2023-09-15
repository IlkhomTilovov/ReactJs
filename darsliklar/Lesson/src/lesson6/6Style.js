import styled, { css } from "styled-components";

export const Container = styled("div")`
  display: flex;
  background-color: coral;
  padding: 20px 20px;
`;
const getSize = (props) => {
  switch (props.type) {
    case "large":
      return "200px";
    case "medium":
      return "150px";
    case "small":
      return "100px";
  }
};
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  width: ${getSize};
  height: ${getSize};
  border: 3px solid blue;
  margin: 0 10px;
`;
export const Title = styled.h1`
  color: blue;
  font-family: bold;
  font-weight: 400;
  padding: 10px;
  border: 1px solid;
  height: fit-content;
`;
