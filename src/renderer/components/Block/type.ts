type Level = 0 | 1 | 2 | 3 | 4 | 5;

type BlockType = {
  id: string;
  unit: number;
  level: Level;
  iteration: number;
  createdAt: Date;
  commitedAt: Date;
};

export type { BlockType, Level };
