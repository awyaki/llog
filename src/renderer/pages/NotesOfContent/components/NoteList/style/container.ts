import { CSSObject } from "@emotion/react";

export const container: CSSObject = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  "> li": {
    width: "48%",
    marginBottom: "32px",
  },
};
