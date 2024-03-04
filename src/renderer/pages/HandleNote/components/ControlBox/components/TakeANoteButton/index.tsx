import { VFC, MouseEventHandler } from "react";

import { Mode } from "../../../../types";
import { TakeANoteButtonIcon } from "./components/TakeANoteButtonIcon";

type Props = {
  mode: Mode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const TakeANoteButton: VFC<Props> = ({ mode, onClick }) => {
  return (
    <button onClick={onClick} disabled={mode === "edit"}>
      <TakeANoteButtonIcon isActive={mode !== "edit"} />
    </button>
  );
};
