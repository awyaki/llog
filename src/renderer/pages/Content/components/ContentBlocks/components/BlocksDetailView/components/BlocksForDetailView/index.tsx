import { VFC } from "react";

import { makeContainer } from "./style/container";

type Props = {
  level: number;
  unitNumber: number;
};

export const BlocksForDetailView: VFC<Props> = ({ level, unitNumber }) => {
  return (
    <div css={makeContainer(level)}>
      <span>{unitNumber}</span>
    </div>
  );
};
