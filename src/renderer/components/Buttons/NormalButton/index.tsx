import { FC, ButtonHTMLAttributes } from "react";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

const baseStyle: CSSObject = {
  padding: "5px 16px",
  transition: ".25s",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "4px",
  textAlign: "center",
};

const normalStyle: CSSObject = {
  ...baseStyle,
  color: colors.white,
  backgroundColor: colors.cyan.DEFAULT,
  borderColor: colors.cyan.DEFAULT,
  "&:hover, &:focus": {
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
  },
};

const reverseStyle: CSSObject = {
  ...baseStyle,
  color: colors.cyan.DEFAULT,
  backgroundColor: colors.white,
  borderColor: colors.cyan.DEFAULT,
  "&:hover, &:focus": {
    backgroundColor: colors.cyan.DEFAULT,
    color: colors.white,
  },
};

type Props = {
  css?: CSSObject;
  isReverseStyle?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const NormalButton: FC<Props> = ({
  children,
  isReverseStyle,
  ...rest
}) => {
  return (
    <button css={isReverseStyle ? reverseStyle : normalStyle} {...rest}>
      {children}
    </button>
  );
};
