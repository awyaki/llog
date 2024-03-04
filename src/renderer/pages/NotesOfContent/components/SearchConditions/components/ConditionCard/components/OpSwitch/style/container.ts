import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig/colors";
import { font } from "~/styleConfig/font";

export const container: CSSObject = {
  width: "50px",
  minWidth: "50px",
  textAlign: "center",
  padding: "2px 0",
  borderRadius: "25px",
  border: `1px solid ${colors.cyan.DEFAULT}`,
  fontSize: font.size.SS,
  color: colors.cyan.DEFAULT,
  marginRight: "10px",
};
