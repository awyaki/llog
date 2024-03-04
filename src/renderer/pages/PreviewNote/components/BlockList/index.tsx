import { VFC } from "react";

import { makeContainer } from "~/pages/style";

import { container } from "./style";

import { Block } from "@prisma/client";

type Props = {
  blocks: Block[];
};

export const BlockList: VFC<Props> = ({ blocks }) => {
  return (
    <ul css={container}>
      {blocks.map(({ id, level, unitNumber }) => (
        <li key={id} css={makeContainer(level)}>
          {unitNumber}
        </li>
      ))}
    </ul>
  );
};
