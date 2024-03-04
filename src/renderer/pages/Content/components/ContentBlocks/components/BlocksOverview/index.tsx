import { VFC } from "react";

import { Block } from "@prisma/client";

import { Box } from "@chakra-ui/react";

import { BlocksForOverview } from "./components/BlocksForOverveiw";

import { container } from "./style/container";

type Props = {
  blocks: Block[];
};

export const BlocksOverview: VFC<Props> = ({ blocks }) => {
  return (
    <Box>
      <ul css={container}>
        {blocks.map(({ id, level }) => (
          <li key={id}>
            <BlocksForOverview level={level} />
          </li>
        ))}
      </ul>
    </Box>
  );
};
