import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig/colors";
import { tagStyle as base } from "~/pages/style/tagStyle";

export const container: CSSObject = {
  ...base,
  marginLeft: "18px",
  border: `1px solid ${colors.text}`,
};
