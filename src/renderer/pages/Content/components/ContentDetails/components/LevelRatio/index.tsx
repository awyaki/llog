import { VFC } from "react";

import { zip } from "~/utils";

import { Block } from "@prisma/client";

import { makeStringForShowRatio } from "./functions";

import { LevelInfo } from "./components/LevelInfo";
import { container } from "./style/container";

type Props = {
  blocks: Block[];
};

export const LevelRatio: VFC<Props> = ({ blocks }) => {
  const strs = makeStringForShowRatio(blocks);
  const levels = [0, 1, 2, 3, 4, 5];

  return (
    <ul css={container}>
      {zip(levels, strs).map(([level, str]) => (
        <li key={level}>
          <LevelInfo level={level} ratio={str} />
        </li>
      ))}
    </ul>
  );
};
