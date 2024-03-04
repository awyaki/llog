import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

export const container: CSSObject = {
  width: "100%",
  backgroundColor: colors.cyan.DEFAULT,
  boxShadow: "1px 1px 12px 1px rgba(0, 0, 0, .3)",
  borderRadius: "5px",
  padding: "16px",
};
