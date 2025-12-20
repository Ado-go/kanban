import type { BoardTypes } from "../types/boardTypes";
import Column from "./Column";

export default function Board({ name, columns }: BoardTypes) {
  return (
    <div className="bg-gray-600 m-5 h-150 flex flex-col">
      <h1 className="p-3 font-bold">{name}</h1>
      <div className="h-full border">
        {columns.map((column) => (
          <Column
            key={column.id}
            title={column.title}
            cardsData={column.cards}
          />
        ))}
      </div>
    </div>
  );
}
