import type { CardDataType } from "../types/cardTypes";
import Card from "./Card";

type ColumnProps = {
  title: string;
  cardsData: CardDataType[];
};

export default function Column({ title, cardsData }: ColumnProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {cardsData.map((card) => (
          <div key={card.id}>
            <Card
              title={card.title}
              description={card.description}
              badges={card.badges}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
