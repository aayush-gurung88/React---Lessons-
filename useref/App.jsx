import React, { useRef } from "react";

function App() {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);

  const makeYellow = (num) => {
    input1.current.style.background = "white";
    input2.current.style.background = "white";
    input3.current.style.background = "white";

    if (num === 1) input1.current.style.background = "yellow";
    if (num === 2) input2.current.style.background = "yellow";
    if (num === 3) input3.current.style.background = "yellow";
  };

  return (
    <div>
      <button onClick={() => makeYellow(1)}>1</button>
      <button onClick={() => makeYellow(2)}>2</button>
      <button onClick={() => makeYellow(3)}>3</button>

      <br /><br />

      <input ref={input1} />
      <input ref={input2} />
      <input ref={input3} />
    </div>
  );
}

export default App;