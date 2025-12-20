type CardProps = {
  title: string;
  description: string;
  badges: string[];
};

export default function Card({ title, description, badges }: CardProps) {
  return (
    <div>
      <div>
        {badges.map((badge) => (
          <div key={badge}>{badge}</div>
        ))}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
