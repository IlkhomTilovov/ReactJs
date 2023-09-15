import React from "react";
class Plus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    const plus = () => {
      if (this.state.count < 100)
        this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    };
    return [
      <div>
        <button onClick={plus}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={minus}>-</button>
      </div>,
    ];
  }
}
export default Plus;
// export const but = [{ id: 1, plus: "+", minus: "-" }];
