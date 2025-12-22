import Badge from "./Badge";

type CardProps = {
  title: string;
  description: string;
  badges: string[];
};

export default function Card({ title, description, badges }: CardProps) {
  return (
    <div className="m-2 border-2">
      <h1 className="text-center bg-gray-700">{title}</h1>
      <div className="p-2 flex gap-2">
        {badges.map((badge) => (
          <Badge badgeName={badge} />
        ))}
        <div className="cursor-pointer select-none">+</div>
      </div>
      <p className="p-2 w-80">{description}</p>
    </div>
  );
}
