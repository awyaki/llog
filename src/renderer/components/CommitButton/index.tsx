import { VFC, MouseEventHandler } from "react";

import { CommitIcon } from "./components";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CommitButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <CommitIcon />
    </button>
  );
};
