import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { NotesIcon, ContentMenuButtonWithText } from "~/components";

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const NotesButton: VFC<Props> = ({ onClick }) => {
  return (
    <ContentMenuButtonWithText
      Icon={NotesIcon}
      text="Notes"
      onClick={onClick}
    />
  );
};
