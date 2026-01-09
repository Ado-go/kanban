import type { BoardTypes } from "../types/boardTypes";
import type { ColumnDataType } from "../types/columnTypes";
import Column from "./Column";
import Button from "./Button";
import type { BadgeTypes } from "../types/badgeTypes";

type BoardProps = {
  name: string;
  columns: ColumnDataType[];
  badgeData: BadgeTypes;
  setBoardData: React.Dispatch<React.SetStateAction<BoardTypes>>;
};

export default function Board({
  name,
  columns,
  badgeData,
  setBoardData,
}: BoardProps) {
  return (
    <div className="bg-gray-600 h-150 flex flex-col">
      <h1 className="bg-gray-700 p-3 font-bold">{name}</h1>
      <div className="flex h-full gap-5 p-3">
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            cardsData={column.cards}
            badgeData={badgeData}
            setBoardData={setBoardData}
          />
        ))}
        <Button text="+" handleClick={() => null} />
      </div>
    </div>
  );
}
