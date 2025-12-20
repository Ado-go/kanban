import type { StatusType } from "./statusType";

type CardDataType = {
  id: number;
  title: string;
  description: string;
  status: StatusType;
};

export type { CardDataType };
