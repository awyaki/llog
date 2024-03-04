import { CSSObject } from "@emotion/react";

export const container: CSSObject = {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  marginBottom: "8px",
  "> li": {
    marginRight: "4px",
    marginBottom: "4px",
  },
};
