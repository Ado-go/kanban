import { useState } from "react";
import type { BoardTypes } from "./types/boardTypes";
import Board from "./components/Board";
import Button from "./components/Button";

function App() {
  const [boardData, setBoardData] = useState<BoardTypes>({
    name: "Work",
    columns: [
      {
        id: 0,
        title: "Todo",
        cards: [
          {
            id: 0,
            title: "task title",
            description: "What exactly has to be done, or in more details",
            badges: ["new", "fast"],
          },
        ],
      },
    ],
  });
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
