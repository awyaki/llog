export type Block = {
  id: number;
  level: number;
  unitNumber: number;
};

export type Note = {
  id: number;
  modefiedAt: Date;
  blocks: Block[];
  tags: { id: number; name: string }[];
  html: string;
};

export type SearchCondition = {
  id: string;
  isVaild: boolean;
  kind: "NOTE" | "TAG" | "CONTENT" | "DATE";
  type: "IS" | "INCLUDE" | "SINCE" | "UNTIL";
  op: "AND" | "OR";
  not: boolean;
  text: string;
};

export type Tag = {
  id: number;
  name: string;
};
