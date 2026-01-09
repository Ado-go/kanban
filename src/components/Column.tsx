import type { CardDataType } from "../types/cardTypes";
import cloneDeep from "lodash/cloneDeep";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Button from "./Button";
import Card from "./Card";
import type { BoardTypes } from "../types/boardTypes";
import type { BadgeTypes } from "../types/badgeTypes";

type ColumnProps = {
  id: string;
  title: string;
  cardsData: CardDataType[];
  badgeData: BadgeTypes;
  setBoardData: React.Dispatch<React.SetStateAction<BoardTypes>>;
};

export default function Column({
  id,
  title,
  cardsData,
  badgeData,
  setBoardData,
}: ColumnProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = cardsData.indexOf(
        cardsData.find((card) => card.id === active.id)
      );
      const newIndex = cardsData.indexOf(
        cardsData.find((card) => card.id === over.id)
      );
      const newOrder = arrayMove(cardsData, oldIndex, newIndex);
      setBoardData((board) => {
        const newColumns = cloneDeep(board.columns);
        const result = newColumns.find((column) => column.id === id);
        result.cards = newOrder;
        return {
          name: board.name,
          columns: newColumns,
        };
      });
    }
  }

  return (
    <div className={"border-2"}>
      <h1 className="text-center bg-gray-700">{title}</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={cardsData}
          strategy={verticalListSortingStrategy}
        >
          {cardsData.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              badgeData={badgeData}
              badges={card.badges}
            />
          ))}
        </SortableContext>
      </DndContext>
      <div className="flex justify-center">
        <Button text="+" handleClick={() => null}></Button>
      </div>
    </div>
  );
}
