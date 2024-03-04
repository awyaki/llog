import { VFC } from "react";

import { container } from "./style/container";

type Props = {
  name: string;
};

export const Tag: VFC<Props> = ({ name }) => {
  return <div css={container}>{name}</div>;
};
