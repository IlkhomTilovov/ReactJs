import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <button onClick={() => this.props.getRes(true)}>Sign Up</button>
      </div>
    );
  }
}
