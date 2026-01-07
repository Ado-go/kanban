import type { CardDataType } from "./cardTypes";

type ColumnDataType = {
  id: string;
  title: string;
  cards: CardDataType[];
};

export type { ColumnDataType };
