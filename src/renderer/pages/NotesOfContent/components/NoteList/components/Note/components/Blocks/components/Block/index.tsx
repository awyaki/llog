import { VFC } from "react";

import { makeContainer } from "./style";

type Props = {
  level: number;
  unitNumber: number;
};

export const Block: VFC<Props> = ({ level, unitNumber }) => {
  return <div css={makeContainer(level)}>{unitNumber}</div>;
};
