import { VFC } from "react";

import { container } from "./style";

type Props = {
  name: string;
};

export const Tag: VFC<Props> = ({ name }) => {
  return <div css={container}>{name}</div>;
};
