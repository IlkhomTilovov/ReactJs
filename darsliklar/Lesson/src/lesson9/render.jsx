import React, { Component } from "react";
import SignUp from "./signUp";
import Signin from "./signin";
import "./style.css";
export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }
  render() {
    const getRes = (value) => {
      console.log(value);
      this.setState({ active: value });
    };
    return (
      <div className="container">
        {this.state.active ? (
          <Signin getRes={getRes} />
        ) : (
          <SignUp getRes={getRes} />
        )}
      </div>
    );
  }
}
