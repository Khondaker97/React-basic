import React, { useState } from "react";

export default function Decrease(props) {
  const [counter, setCounter] = useState(100);
  return (
    <div className="decrease">
      <p>The value of the counter is {counter}</p>
      <button onClick={() => setCounter(counter - props.value)}>
        {props.title}
      </button>
    </div>
  );
}
