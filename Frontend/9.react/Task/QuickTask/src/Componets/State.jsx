import React from "react";
import { useState } from "react";

const State = () => {
  const initialstate = [{ Value: 20 }, { data: 40 }];

  const [state, setstate] = useState(initialstate);
  console.log(state);

  const value = () => {
    setstate((prevstate) => {
      const updatestate = [...prevstate];
    //   console.log(updatestate);
      updatestate[0] = { ...updatestate[0], Value: updatestate[0].Value + 1 };
      return updatestate;
    });
  };

  const data = () => {
    setstate(state[1].data + 1);
  };

  return (
    <div>
      <p>value:{state[0].Value}</p>
      <p>data:{state[1].data}</p>

      <button className="btn" onClick={value}>
        value
      </button>
      <button className="btn" onClick={data}>
        data
      </button>
    </div>
  );
};

export default State;
