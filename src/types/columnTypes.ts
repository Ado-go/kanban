import type { CardDataType } from "./cardTypes";

type ColumnDataType = {
  id: number;
  title: string;
  cards: CardDataType[];
};

export type { ColumnDataType };
