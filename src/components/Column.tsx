import type { CardDataType } from "../types/cardTypes";
import Card from "./Card";

type ColumnProps = {
  title: string;
  cardsData: CardDataType[];
};

export default function Column({ title, cardsData }: ColumnProps) {
  return (
    <div className="border-2">
      <h1 className="text-center bg-gray-700">{title}</h1>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          badges={card.badges}
        />
      ))}
    </div>
  );
}
