import { VFC, ButtonHTMLAttributes } from "react";

import { CSSObject } from "@emotion/react";

import { SearchIcon } from "~/components";

import { iconButton } from "../style";

type Props = {
  css?: CSSObject;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export const SearchButton: VFC<Props> = ({ ...rest }) => {
  return (
    <button css={iconButton} {...rest}>
      <SearchIcon />
    </button>
  );
};
