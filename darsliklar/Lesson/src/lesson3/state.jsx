import React from "react";
import { student } from "./mock";

let base = student;
class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      data: base,
      name: "",
      status: "",
      searchStudent: "",
    };
  }
  render() {
    // const plus = () => {
    //   if (this.state.count < 10) this.setState({ count: this.state.count + 1 });
    // };
    // const minus = () => {
    //   if (this.state.count > 1) this.setState({ count: this.state.count - 1 });
    // };
    const onChange = (e) => {
      console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
    };
    const onFilter = (searchStudent) => {
      let res = base.filter((value) => value.name.includes(searchStudent));
      console.log(searchStudent);
      this.setState({
        data: res,
      });
    };
    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    // const onNameChange = (e) => {
    //   this.setState({ name: e.target.value });
    // };
    // const onSurnameChange = (e) => {
    //   this.setState({ surname: e?.target?.value });
    // };
    const onAdd = () => {
      let user = {
        id: Date.now(),
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
    return (
      <div>
        <h1>name: {this.state.name}</h1>
        <h1>status: {this.state.status}</h1>
        <input
          value={this.state.name}
          name="name"
          type="text"
          placeholder="name"
          onChange={onChange}
        />
        <input
          value={this.state.status}
          name="status"
          type="text"
          placeholder="status"
          onChange={onChange}
        />
        <button onClick={onAdd}>Add</button>
        <hr />
        <input type="text" placeholder="search" onChange={onFilter} />
        <hr />
        {/* <input
          type="text"
          placeholder="filter"
          onChange={({ target: { value } }) => onFilter(value)}
        /> */}
        <table border="1" width="70%">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map(({ id, name, status }) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{status}</td>
                    <td>
                      <button onClick={() => onDelete(id)}>Delete</button>
                    </td>
                    <td>
                      <button>Edit</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th colSpan={5}>
                  <h1>No Data</h1>
                </th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default State;
