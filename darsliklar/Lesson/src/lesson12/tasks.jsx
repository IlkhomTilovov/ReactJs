import React, { useState } from "react";
const Counts = (props) => {
  const [data, setCount] = useState([0, 0, 0]);
  return (
    <div>
      {data.map((i, idx) => {
        return (
          <div key={idx}>
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
                data[idx] += 1;
                setCount([...data]);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Counts;
