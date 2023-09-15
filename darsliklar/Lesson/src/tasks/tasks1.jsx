import React from "react";
import "./style.css";
class Task1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      select: 1,
    };
  }
  render() {
    const onSelect = (event) => {
      this.setState({ select: event.target.value });
    };
    const minus = () => {
      this.setState({ count: this.state.count - this.state.select });
    };
    const plus = () => {
      this.setState({ count: this.state.count + +this.state.select });
    };
    return (
      <div className="container">
        <div className="select">
          <select name="" id="" onChange={onSelect}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <div className="button">
          <button onClick={minus}>-</button>
          <h1>{this.state.count}</h1>
          <button onClick={plus}>+</button>
        </div>
      </div>
    );
  }
}
export default Task1;
