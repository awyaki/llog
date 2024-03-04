import { VFC } from "react";

import { makeContainer } from "./style/container";

type Props = {
  level: number;
};

export const Block: VFC<Props> = ({ level }) => {
  return <div css={makeContainer(level)}></div>;
};
