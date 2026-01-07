import Badge from "./Badge";
import { useDraggable } from "@dnd-kit/core";

type CardProps = {
  title: string;
  description: string;
  badges: string[];
};

export default function Card({ title, description, badges }: CardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: title,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

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
          <Badge key={badge} badgeName={badge} />
        ))}
      </div>
      <p className="p-2 w-80">{description}</p>
    </div>
  );
}
