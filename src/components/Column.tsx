import type { CardDataType } from "../types/cardTypes";
import { useDroppable } from "@dnd-kit/core";
import Button from "./Button";
import Card from "./Card";

type ColumnProps = {
  title: string;
  cardsData: CardDataType[];
};

export default function Column({ title, cardsData }: ColumnProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: title,
  });

  const style = isOver ? "border-2 border-blue-500" : "border-2";
  return (
    <div className={style} ref={setNodeRef}>
      <h1 className="text-center bg-gray-700">{title}</h1>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          badges={card.badges}
        />
      ))}
      <div className="flex justify-center">
        <Button text="+" handleClick={() => null}></Button>
      </div>
    </div>
  );
}
