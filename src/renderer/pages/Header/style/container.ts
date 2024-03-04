import { CSSObject } from "@emotion/react";
import { colors } from "~/styleConfig/colors";

export const container: CSSObject = {
  position: "fixed",
  width: "100%",
  minWidth: "800px",
  height: "90px",
  display: "flex",
  padding: "16px 5%",
  justifyContent: "space-between",
  borderBottom: `1px solid ${colors.gray.LIGHT}`,
  backgroundColor: "white",
  zIndex: 2,
};
