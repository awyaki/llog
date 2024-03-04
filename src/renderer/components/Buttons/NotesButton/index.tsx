import { VFC, ButtonHTMLAttributes } from "react";

import { CSSObject } from "@emotion/react";

import { NotesIcon } from "~/components/Icons";

import { menuButton } from "../style";

type Props = {
  css?: CSSObject;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const NotesButton: VFC<Props> = ({ ...rest }) => {
  return (
    <button css={menuButton} {...rest}>
      <NotesIcon />
    </button>
  );
};
