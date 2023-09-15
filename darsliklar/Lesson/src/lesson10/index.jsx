import React, { Component } from "react";

export default class Render extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      count: 1,
    };
    console.log("constructor");
  }
  componentWillMount() {
    // birinchi renderdan oldin
    console.log("componentWillMount");
  }
  componentDidMount() {
    // birinchi renderdan keyin
    console.log("componentDidMount");
  }
  componentWillReceiveProps() {
    //parentdan childga prop kelgan vaqtda
    console.log("componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    // component updata qilish yoki qilmaslik
    console.log("shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    // renderdan oldin va prop kelishdan keyin
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    // Dom created
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    //after DOM element removed
    console.log("render");

    const onCuont = () => {
      let res = this.state.count + 1;
      this.setState({ count: res });
    };
    return (
      <div>
        <h1>React Js Life Cycle</h1>
        <h1>{this.state.count}</h1>
        <button onClick={onCuont}>click me</button>
      </div>
    );
  }
}
