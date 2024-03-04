import { VFC, MouseEventHandler } from "react";

import { SearchNoteButtonIcon } from "./components/SearchNoteButtonIcon";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const SearchNoteButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <SearchNoteButtonIcon />
    </button>
  );
};
