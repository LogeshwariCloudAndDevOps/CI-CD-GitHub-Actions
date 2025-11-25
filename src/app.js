import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from React!</h1>
      <p>You clicked the button {count} times.</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
