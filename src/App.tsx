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
        title: "Name or status maybe",
        cards: [
          {
            id: 0,
            title: "task title",
            description: "What exactly has to be done, or in more details",
            status: "todo",
          },
        ],
      },
    ],
  });

  return (
    <div className="m-5">
      <h1>Kanban-ana</h1>
      <Board name={boardData.name} columns={boardData.columns} />
      <input type="text" className="border" />
      <div>
        <Button text="upload data" handleClick={() => null} />
        <Button text="export data" handleClick={() => null} />
      </div>
    </div>
  );
}

export default App;
