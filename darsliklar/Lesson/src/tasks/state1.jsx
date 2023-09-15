import React from "react";
import { student } from "../lesson3/mock";
class State1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "",
      status: "",
      data: student,
      seacrh: "id",
      active: null,
    };
  }
  render() {
    const onInput = (e) => {
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
    };
    const onDelete = (id) => {
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    const onAdd = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        data: [...this.state.data, user],
        name: "",
        status: "",
      });
      console.log(user);
    };
    const onFilter = (e) => {
      let res = student.filter((item) =>
        `${item[this.state.seacrh]}`.toLowerCase().includes(e.target.value)
      );
      this.setState({
        data: res,
      });
    };
    const onSelect = (e) => {
      this.setState({ seacrh: e.target.value });
    };
    const onEdit = ({ id, name, status }, isSave) => {
      if (isSave) {
        let res = this.state.data.map((value) =>
          value.id === this.state.active.id
            ? { ...value, name: this.state.name, status: this.state.status }
            : value
        );
        this.setState({ active: null, data: res });
      } else {
        this.setState({
          name: name,
          status: status,
          active: { id, name, status },
        });
      }
    };
    return (
      <div>
        <h1>name : {this.state.name}</h1>
        <h1>surname : {this.state.status}</h1>
        <input
          value={this.state.name}
          name="name"
          onChange={onInput}
          type="text"
          placeholder="Name"
        />
        <input
          value={this.state.status}
          name="status"
          onChange={onInput}
          placeholder="Status"
        />
        <button onClick={onAdd}>add</button>
        <hr />
        <select onChange={onSelect} name="" id="">
          <option value="id">ID</option>
          <option value="name">Name</option>
          <option value="status">Status</option>
        </select>
        <input onChange={onFilter} type="text" placeholder="Search" />
        <hr />
        <table border="1" width="50%">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>STATUS</th>
              <th>DELETE</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map(({ id, name, status }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onInput}
                          name="name"
                          value={this.state.name}
                          type="text"
                        />
                      ) : (
                        name
                      )}
                    </td>
                    <td>
                      {" "}
                      {this.state.active?.id === id ? (
                        <input
                          onChange={onInput}
                          name="status"
                          value={this.state.status}
                          type="text"
                        />
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
                );
              })
            ) : (
              <tr>
                <th colSpan={5}>
                  <h1>no data</h1>
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default State1;
