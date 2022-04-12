import React, { useState } from "react";

function Increase(props) {
  const [counter, setCounter] = useState(100);
  return (
    <div className="increase">
      <p>The value of the counter is {counter}</p>
      <button onClick={() => setCounter(counter + props.value)}>
        {props.title}
      </button>
    </div>
  );
}

export default Increase;
