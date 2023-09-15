import React from "react";
import "./icon.jsx";
import { Icons } from "./icon.jsx";
const { Search } = Icons;
class Table extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h3>ID</h3>
          <h3>Name</h3>
          <h3>Surname</h3>
          <h3>Add</h3>
          <h3>Year</h3>
          <div className="inputPosk">
            <input type="text" placeholder="Search" />
            <Search className="posk" />
          </div>
        </div>
      </div>
    );
  }
}
export default Table;
