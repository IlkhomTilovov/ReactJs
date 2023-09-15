import React from "react";
import Plus from "./mock.jsx";
class Tasks2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Plus,
    };
  }

  render() {
    const onAdd = () => {};
    return (
      <div>
        <button onClick={onAdd}>Add</button>
        <div>
          
        </div>
      </div>
    );
  }
}
export default Tasks2;
