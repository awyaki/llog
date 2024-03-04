import { VFC } from "react";

import { Block as BlockType } from "@prisma/client";

import { Block } from "./components";

import { container } from "./style";

type Props = {
  blocks: Pick<BlockType, "id" | "unitNumber" | "level">[];
};

export const ShowBlocks: VFC<Props> = ({ blocks }) => {
  return (
    <ul css={container}>
      {blocks.map(({ id, unitNumber, level }) => (
        <li key={id}>
          <Block unitNumber={unitNumber} level={level} />
        </li>
      ))}
    </ul>
  );
};
