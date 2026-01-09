import Badge from "./Badge";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { BadgeTypes } from "../types/badgeTypes";

type CardProps = {
  id: string;
  title: string;
  description: string;
  badgeData: BadgeTypes;
  badges: string[];
};

export default function Card({
  id,
  title,
  description,
  badgeData,
  badges,
}: CardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="m-2 border-2 bg-gray-500 hover:cursor-grab"
    >
      <h1 className="text-center bg-gray-700">{title}</h1>
      <div className="p-2 flex gap-2">
        {badges.map((badge) => (
          <Badge key={badge} color={badgeData[badge]} badgeName={badge} />
        ))}
      </div>
      <p className="p-2 w-80">{description}</p>
    </div>
  );
}
