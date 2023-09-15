import React from "react";
import { side } from "../../utils/side";
import { Container, Wrapper, Title, ItemWrapper } from "./sideStyle";
import "../../index.css";
class Side extends React.Component {
  render() {
    return (
      <Container className="Container">
        {side.map(({ icon, id, title, data }) => (
          <Wrapper key={id}>
            {title && <Title title>{title}</Title>}
            {data.map(({ icon: Icon, title: subTitle }) => (
              <ItemWrapper>
                <Icon />
                <Title>{subTitle}</Title>
              </ItemWrapper>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
export default Side;
