import styled from "styled-components";
import { ReactComponent as burger } from "../assets/icons/Burger.svg";
import { ReactComponent as search } from "../assets/icons/search.svg";
import { ReactComponent as bell } from "../assets/icons/bell.svg";
import { ReactComponent as video } from "../assets/icons/videoAdd.svg";
import { ReactComponent as menu } from "../assets/icons/menu.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  background-color: #212121;
  color: #fff;
  height: 100vh;
  padding: ${({ flex }) => !flex && "0 30px"};
`;
export const Wrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  background-color: #212121;
  top: 0;
`;
export const Category = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: ${({ end }) => end && "flex-end"};
  gap: ${({ gap }) => gap && "20px"};
`;
export const Icons = styled.div``;

Icons.Burger = styled(burger)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
Icons.Bell = styled(bell)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;
`;
Icons.Video = styled(video)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  cursor: pointer;
`;
Icons.Menu = styled(menu)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;
`;

Icons.Logo = styled.img`
  width: 100px;
  height: 28px;
  cursor: pointer;
`;
export const Input = styled.input`
  height: 30px;
  background-color: #000;
  width: 100%;
  max-width: 500px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border: 2px 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  :focus {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  padding-left: 10px;
  padding-left: 10px;
`;
Icons.Search = styled(search)`
  width: 65px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px 2px 2px 0px;
  padding: 10px 20px;
  cursor: pointer;
`;
export const User = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
`;
