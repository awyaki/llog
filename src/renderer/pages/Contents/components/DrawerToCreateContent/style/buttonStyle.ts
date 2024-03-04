import { CSSObject } from "@emotion/react";
import { colors } from "~/styleConfig/colors";

import { buttonStyle as base } from "~/pages/style/buttonStyle";

export const buttonStyle: CSSObject = {
  ...base,
  color: colors.cyan.DEFAULT,
};
