import React, { Component } from "react";
import Nav from "./nav/nav";
import Body1 from "./body/body1";
import "./styleHouzing.css";
export default class Houzing extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Body1 />
      </div>
    );
  }
}
