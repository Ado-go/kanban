import type { BoardTypes } from "../types/boardTypes";
import Column from "./Column";
import Button from "./Button";

export default function Board({ name, columns }: BoardTypes) {
  return (
    <div className="bg-gray-600 h-150 flex flex-col">
      <h1 className="bg-gray-700 p-3 font-bold">{name}</h1>
      <div className="flex h-full gap-5 p-3">
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            cardsData={column.cards}
          />
        ))}
        <Button text="+" handleClick={() => null} />
      </div>
    </div>
  );
}
