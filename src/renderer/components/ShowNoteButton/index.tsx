import { VFC, MouseEventHandler } from "react";

import { ShowNoteIcon } from "./components";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ShowNoteButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <ShowNoteIcon />
    </button>
  );
};
