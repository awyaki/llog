import { VFC } from "react";

import { Block } from "./components/Block";
import { container } from "./style/container";

type Props = {
  level: number;
  ratio: string;
};

export const LevelInfo: VFC<Props> = ({ level, ratio }) => {
  return (
    <div css={container}>
      <Block level={level} />
      <div>{ratio}</div>
    </div>
  );
};
