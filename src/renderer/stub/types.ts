export type Block = {
  id: number;
  level: number;
  unitNumber: number;
};

export type Note = {
  id: number;
  modefiedAt: Date;
  blocks: Block[];
  tags: { id: number, name: string }[];
  html: string;
};
