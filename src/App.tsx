import { useState } from "react";
import type { BoardTypes } from "./types/boardTypes";
import type { BadgeTypes } from "./types/badgeTypes";
import { boardFakeData, bageFakeData } from "./constants/fakeData";
import Board from "./components/Board";
import Button from "./components/Button";

function App() {
  const [boardData, setBoardData] = useState<BoardTypes>(boardFakeData);
  const [badgeData, setBadgeData] = useState<BadgeTypes>(bageFakeData);
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
        <Button
          text="reset fake board data"
          handleClick={() => {
            setBoardData(boardFakeData);
            setBadgeData(bageFakeData);
          }}
        ></Button>
        <Button
          text="clear board"
          handleClick={() => {
            setBoardData({ name: "New board", columns: [] });
            setBadgeData({});
          }}
        ></Button>
      </div>
    </div>
  );
}

export default App;
