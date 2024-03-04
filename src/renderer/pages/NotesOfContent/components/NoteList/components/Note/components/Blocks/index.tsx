import { VFC } from "react";

import { container } from "./style/container";

import { Block } from "./components/Block";

import { Block as TBlock } from "~/stub/types";

type Props = {
  blocks: TBlock[];
};

export const Blocks: VFC<Props> = ({ blocks }) => {
  return (
    <ul css={container}>
      {blocks.map(({ id, level, unitNumber }) => (
        <li key={id}>
          <Block level={level} unitNumber={unitNumber} />
        </li>
      ))}
    </ul>
  );
};
