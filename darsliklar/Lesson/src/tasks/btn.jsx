import React from "react";
class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btn: [0, 0],
      count: 1,
    };
  }
  render() {
    const onAdd = () => {
      this.setState({
        btn: [...this.state.btn, 0],
      });
    };
    const plus = ({ i, idx }) => {
      let data = this.state.btn;
      console.log(data[idx]);
      data[idx] += 1;
      console.log(data);
      this.setState({
        btn: data,
      });
    };
    const minus = () => {
      if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    };
    return (
      <div>
        <button onClick={onAdd}>Add</button>
        <button
          onClick={() => {
            console.log(this.state.btn);
          }}
        >
          Get
        </button>
        {this.state.btn?.map((i, idx) => {
          return (
            <div key={idx}>
              <button onClick={() => plus({ i, idx })}>+</button>
              {i}
              <button onClick={() => minus({ i, idx })}>-</button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Btn;
