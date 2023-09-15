import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 95vh;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 10px 0;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin-left: 24px;
  height: 40px;
  color: ${({ title }) => (title ? "rgba(255, 255, 255, 0.6)" : "#fff")};
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;
