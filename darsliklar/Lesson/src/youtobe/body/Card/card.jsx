import React from "react";
import { Container, Video, Wrapper, User, Title } from "../Card/cardStyle";
class Card extends React.Component {
  render() {
    const {
      user: { img, name },
      video,
      view,
      time,
      title,
    } = this.props;
    
    return (
      <Container>
        <Video src={video} alt="Video Content" />
        <Wrapper>
          <User src={img} />
          <div>
            <Title>{title}</Title>
            <Title desc>{name}</Title>
            <div style={{ display: "flex" }}>
              <Title>{view}</Title>
              <Title>{time}</Title>
            </div>
          </div>
        </Wrapper>
      </Container>
    );
  }
}
export default React.memo(Card);
