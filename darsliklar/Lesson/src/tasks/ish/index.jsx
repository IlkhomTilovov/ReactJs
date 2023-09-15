import React, { Component } from "react";
import { Oila } from "./mock";
import "./style.css";
export default class CRUD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Oila,
      name: "",
      status: "",
      active: null,
    };
  }
  render() {
    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    const onSearch = (e) => {
      let res = e.target.value;
      let rr = Oila.filter((i) => i.name.includes(res));
      this.setState({ data: rr });
    };
    const onAdd = () => {
      let user = {
        id: 1,
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        name: "",
        status: "",
        data: [...this.state.data, user],
      });
      console.log(user);
    };
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const onEdit = ({ id, name, status }, isSave) => {
      if (isSave) {
        this.setState({ active: null });
      } else {
        this.setState({
          active: { id, name, status },
        });
      }
    };
    return (
      <div>
        <table border={1} width="50%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full name</th>
              <th>status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          {this.state.data.map(({ id, name, status }) => {
            return (
              <tbody key={id}>
                <tr>
                  <td style={{ textAlign: "center" }}>{id}</td>
                  <td style={{ padding: "0 10px" }}>
                    {this.state.active?.id === id ? (
                      <input value={this.state.active.name} type="text" />
                    ) : (
                      name
                    )}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {" "}
                    {this.state.active?.id === id ? (
                      <input  value={this.state.active.status} type="text" />
                    ) : (
                      status
                    )}
                  </td>
                  <td>
                    <button onClick={() => onDelete(id)}>delete</button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        onEdit(
                          { id, name, status },
                          this.state.active?.id === id
                        )
                      }
                    >
                      {this.state.active?.id === id ? "save" : "edit"}
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <br />
        <div className="continer">
          <div className="input">
            <input onChange={onSearch} type="text" placeholder="search" />
            <h1>Filter</h1>
          </div>
          <div className="input">
            <input
              name="name"
              value={this.state.name}
              onChange={onChange}
              type="text"
              placeholder="name"
            />
            <h1>Full name</h1>
          </div>
          <div className="input">
            <input
              name="status"
              value={this.state.status}
              onChange={onChange}
              type="text"
              placeholder="Status"
            />
            <h1>Status</h1>
          </div>
          <div className="button">
            <button onClick={onAdd}>add</button>
          </div>
        </div>
      </div>
    );
  }
}
