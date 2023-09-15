import React, { Component } from "react";
import { Container, Wrapper, Category, Icons, Input, User } from "./style";
import Side from "./sidebar/sidebar";
import Body from "./body/body";
import logo from "../assets/img/left.png";
import user from "../assets/img/user.jpg";
export default class Youtobe extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Category gap>
            <Icons.Burger></Icons.Burger>
            <Icons.Logo src={logo} alt="Logo Img" />
          </Category>
          <Category>
            <Input placeholder="search" />
            <Icons.Search />
          </Category>
          <Category end>
            <Icons.Video />
            <Icons.Menu />
            <Icons.Bell />
            <User src={user} alt="user" />
          </Category>
        </Wrapper>
        <Container flex>
          <Side />
          <Body />
        </Container>
      </Container>
    );
  }
}
