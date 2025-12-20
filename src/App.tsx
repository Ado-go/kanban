import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Kanban-ana</h1>
      <button onClick={() => setCount(count + 1)}>banana count: {count}</button>
    </>
  );
}

export default App;
