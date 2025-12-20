import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [boardData, setBoardData] = useState([]);

  return (
    <>
      <h1>Kanban-ana</h1>
      <Board name="Work" columns={boardData} />
    </>
  );
}

export default App;
