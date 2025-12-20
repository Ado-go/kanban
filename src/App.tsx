import { useState } from "react";
import type { BoardTypes } from "./types/boardTypes";
import { boardFakeData } from "./constants/fakeData";
import Board from "./components/Board";
import Button from "./components/Button";

function App() {
  const [boardData, setBoardData] = useState<BoardTypes>(boardFakeData);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="m-5">
      <h1>Kanban-ana</h1>
      <Board name={boardData.name} columns={boardData.columns} />
      <input
        type="text"
        className="border"
        placeholder="Insert data"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <Button text="upload data" handleClick={() => null} />
        <Button
          text="export data"
          handleClick={() => setInputValue(JSON.stringify(boardData))}
        />
      </div>
    </div>
  );
}

export default App;
