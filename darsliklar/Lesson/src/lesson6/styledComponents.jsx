import React from "react";
import { Box, Container, Title } from "./6Style";
class StyledComponents extends React.Component {
  render() {
    return (
      <Container>
        <Box type="large">Large</Box>
        <Box type="medium">Medium</Box>
        <Box type="small">Small</Box>
        <Title>Hi Title</Title>
      </Container>
    );
  }
}
export default StyledComponents;
