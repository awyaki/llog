import { VFC } from "react";
import { Box } from "@chakra-ui/react";

import { Block as Block } from "@prisma/client";

import { BlocksForDetailView } from "./components/BlocksForDetailView";

import { container } from "./style/container";

type Props = {
  blocks: Block[];
};

export const BlocksDetailView: VFC<Props> = ({ blocks }) => {
  return (
    <Box>
      <ul css={container}>
        {blocks.map(({ id, unitNumber, level }) => (
          <li key={id}>
            <BlocksForDetailView unitNumber={unitNumber} level={level} />
          </li>
        ))}
      </ul>
    </Box>
  );
};
