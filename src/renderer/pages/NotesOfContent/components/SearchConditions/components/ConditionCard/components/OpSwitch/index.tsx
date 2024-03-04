import { VFC, MouseEventHandler } from "react";

import { container } from "./style/container";

import { SearchCondition } from "~/stub/types";

type Props = {
  op: SearchCondition["op"];
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const OpSwitch: VFC<Props> = ({ op, onClick }) => {
  return (
    <button css={container} onClick={onClick}>
      {op}
    </button>
  );
};
