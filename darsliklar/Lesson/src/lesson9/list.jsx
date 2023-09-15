import React, { Component } from "react";

const list = [
  { id: 1, title: "Webbrain Academy" },
  { id: 2, title: "Digital One" },
  { id: 3, title: "Top Class Academy" },
  { id: 4, title: "Webbrain Academy" },
  { id: 5, title: "Share Academy" },
  { id: 6, title: "WBA Academy" },
];

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
    };
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.list.filter((value) => value.id !== id);
      this.setState({ list: res });
    };
    return (
      <div>
        <h1>List</h1>
        {this.state.list.map((value) => {
          return (
            <div key={value.id}>
              <h1>
                {value.id}
                {value.title}{" "}
                <button onClick={() => onDelete(value.id)}>delete</button>
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}
