import { CSSObject } from "@emotion/react";
import { colors } from "~/styleConfig/colors";
import { font } from "~/styleConfig/font";

export const buttonStyle: CSSObject = {
  minWidth: "80px",
  padding: "3px 10px",
  borderRadius: "100px",
  border: `1px solid ${colors.cyan.DEFAULT}`,
  textAlign: "center",
  fontSize: font.size.SS,
};
