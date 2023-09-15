import React, { useState } from "react";

const Count = (props) => {
  const [data, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h1>Hooks</h1>
      <div className="container" style={{ display: "flex" }}>
        {data.map((i, idx) => {
          return (
            <div key={idx} className="btn">
              <button
                onClick={() => {
                  data[idx] -= 1;
                  setCount([...data]);
                }}
              >
                -
              </button>
              <h1>{i}</h1>
              <button
                onClick={() => {
                  data[idx] += 1 ;
                  setCount([...data]);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Count;
