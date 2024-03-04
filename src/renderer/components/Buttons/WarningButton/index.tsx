import { FC, ButtonHTMLAttributes } from "react";

import { colors } from "~/styleConfig";

export const WarningButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <button
      css={{
        textAlign: "center",
        padding: "5px 16px",
        transition: ".25s",
        color: colors.white,
        backgroundColor: colors.red.DEFAULT,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: colors.red.DEFAULT,
        borderRadius: "4px",
        "&:hover, &:focus": {
          backgroundColor: colors.white,
          color: colors.red.DEFAULT,
        },
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
