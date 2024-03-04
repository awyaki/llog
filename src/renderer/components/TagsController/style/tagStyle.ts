import { CSSObject } from "@emotion/react";

import { colors, font } from "~/styleConfig";

export const tagStyle: CSSObject = {
  minWidth: "80px",
  textAlign: "center",
  fontSize: font.size.SS,
  borderRadius: "4px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.white,
  color: colors.cyan.DEFAULT,
  padding: "2px 4px",
  transition: ".25s",
};
