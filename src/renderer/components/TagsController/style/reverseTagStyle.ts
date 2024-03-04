import { CSSObject } from "@emotion/react";

import { tagStyle } from "./tagStyle";

import { colors } from "~/styleConfig";

export const reverseTagStyle: CSSObject = {
  ...tagStyle,
  borderColor: colors.white,
  backgroundColor: colors.cyan.DEFAULT,
  color: colors.white,
};
