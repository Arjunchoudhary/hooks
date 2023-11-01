import React, { useEffect } from "react";
import { useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
        <h1> UseEffect Hook Example</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} Times {"  "}
      </button>
    </div>
  );
}
