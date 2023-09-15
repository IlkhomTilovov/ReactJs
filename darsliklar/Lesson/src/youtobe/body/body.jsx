import React from "react";
import { Container } from "./bodyStyle";
import "../../index.css";
import "../body/mock";
import Card from "./Card/card.jsx";
import { data } from "../body/mock";
class Body extends React.Component {
  render() {
    return (
      <Container className="Container">
        {data.map((i) => {
          return <Card {...i} />;
        })}
      </Container>
    );
  }
}
export default Body;
