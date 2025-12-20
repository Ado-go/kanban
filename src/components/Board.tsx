import type { ColumnDataType } from "../types/columnTypes";
import Column from "./Column";

type BoardProps = {
  name: string;
  columns: ColumnDataType[];
};

export default function Board({ name, columns }: BoardProps) {
  return (
    <div>
      <h1>{name}</h1>
      <div>
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
