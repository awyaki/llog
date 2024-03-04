import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

export const secondaryStyle: CSSObject = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "30px",
  height: "30px",
  borderRadius: "20px",
  padding: "5px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.cyan.DEFAULT,
  color: colors.cyan.DEFAULT,
  backgroundColor: colors.white,
  textAlign: "center",
  transition: ".25s",
  "&:hover, &:focus": {
    backgroundColor: colors.cyan.DEFAULT,
    color: colors.white,
  },
};
