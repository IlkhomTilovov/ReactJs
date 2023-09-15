import React from "react";
import { Container, Button, ActiveButton } from "./state.Style";
import { ThemeProvider, createGlobalStyle } from "styled-components";

class YouTobe extends React.Component {
  render() {
    return (
      <Container>
        <Button>Click me</Button>
        <ActiveButton>Active Button</ActiveButton>
      </Container>
    );
  }
}
export default YouTobe;
