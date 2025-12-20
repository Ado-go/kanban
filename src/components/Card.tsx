import type { StatusType } from "../types/statusType";

type CardProps = {
  title: string;
  description: string;
  status: StatusType;
};

export default function Card({ title, description, status }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>{status}</div>
    </div>
  );
}
