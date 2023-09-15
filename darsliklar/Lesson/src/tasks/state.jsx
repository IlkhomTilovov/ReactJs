import React from "react";
import "./style.css";
let funTableData = () => {
  let arr = [];
  for (let i = 0; i < 200; i++) {
    arr.push({ id: i + 1, name: "", status: "" });
  }
  return arr;
};
class Tasks3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: "",
      data: funTableData(),
    };
  }
  render() {
    const onInput = ({ key, value }) => {
      this.setState((prev) => ({ ...prev, [key]: value }));
    };
    const onInpu = (e) => {
      console.log(this.state.data.value);
    };
    return (
      <div>
        <div className="container">
          <div className="input">
            <h1>Name</h1>
            <input
              value={this.state.name}
              type="text"
              placeholder="Name"
              onChange={({ target: { value } }) =>
                onInput({
                  key: "name",
                  value,
                })
              }
            />
          </div>
          <div className="input">
            <h1>Surname</h1>
            <input
              value={this.state.status}
              type="text"
              placeholder="Status"
              onChange={({ target: { value } }) =>
                onInput({
                  key: "status",
                  value,
                })
              }
            />
          </div>
          <div className="input">
            <button>Add</button>
          </div>
        </div>
        <hr />
        <h2>{this.state.name}</h2>
        <h2>{this.state.status}</h2>
        <button
          onClick={() => {
            console.log(this.state.data);
          }}
        >
          save
        </button>
        <div className="table">
          {this.state.data?.map((i) => {
            return (
              <div className="row" key={i.id}>
                <div className="cellNumber">{i.id}</div>
                <div className="cell">
                  <input onChange={onInpu} type="text" placeholder="name" />
                </div>
                <div className="cell">
                  <input type="text" placeholder="sername" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Tasks3;
