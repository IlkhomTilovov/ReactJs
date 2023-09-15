import React from "react";
import "./table.css";
import "./index.js";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: [],
      list: [],
      rightForm: false,
      values: {
        firstName: "",
        lastName: "",
        gmail: "",
        age: "",
        phoneNumber: "",
      },
    };
  }
  render() {
    const onAdd = () => {
      this.setState({
        rightForm: true,
      });
    };
    let btnArray = [
      {
        id: 1,
        text: "close",
        fun: () => {
          this.setState({
            rightForm: false,
          });
        },
      },
      {
        id: 2,
        text: "add",
        fun: () => {
          let response = {
            ...this.state.values,
            id: this.state.list.length + 1,
          };
          this.setState({ list: [...this.state.list, response] });
        },
      },
    ];
    let forms = [
      { id: 1, key: "firstName", type: "text", placeholder: "ism" },
      { id: 2, key: "lastName", type: "text", placeholder: "familya" },
      { id: 3, key: "age", type: "date", placeholder: "yoshi" },
      { id: 4, key: "phoneNumber", type: "text", placeholder: "telefon raqam" },
      { id: 5, key: "gmail", type: "gmail", placeholder: "elektron po'chta" },
    ];
    const funHandleChange = ({ key, value }) => {
      let values = { ...this.state.values, [key]: value };
      this.setState({
        values,
      });
    };
    const cells = [
      {
        id: 1,
        width: "",
        key: "firstName",
      },
      {
        id: 2,
        width: "",
        key: "lastName",
      },
      {
        id: 3,
        width: "",
        key: "age",
      },
      {
        id: 4,
        width: "",
        key: "phoneNumber",
      },
      {
        id: 5,
        width: "",
        key: "gmail",
      },
    ];
    return (
      <>
        <div className="body">
          <div className="container">
            <>
              {/*                                   left */}
              <div className="nav"></div>
              <div className="head">
                {this.state.list.map((row) => {
                  return (
                    <div key={row.id} className="row">
                      <div className="click">
                        {cells?.map((cell) => {
                          return (
                            <div className="cell" key={cell?.id}>
                              {row[cell?.key]}
                            </div>
                          );
                        })}
                      </div>
                      <div className="btns"></div>
                    </div>
                  );
                })}
              </div>
              <div className="footer">
                <div className="btn">
                  <button className="green">p</button>
                  <button onClick={onAdd} className="blue">
                    +
                  </button>
                </div>
              </div>
            </>
          </div>
          {/*                                     right */}
          {this.state.rightForm ? (
            <div>
              <div className="poskContainer">
                <div className="input">
                  {forms?.map(({ placeholder, key, type, id }) => (
                    <input
                      key={id}
                      type={type}
                      placeholder={placeholder}
                      value={this.state.values[key]}
                      onChange={({ target: { value } }) => {
                        funHandleChange({ value, key });
                      }}
                    />
                  ))}
                </div>
                <div className="inputBtn">
                  {btnArray?.map((i) => {
                    return (
                      <button key={i?.id} className="iBtn" onClick={i?.fun}>
                        {i?.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}
export default Table;
