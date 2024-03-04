import { CSSObject } from "@emotion/react";

export const container: CSSObject = {
  display: "flex",
  justifyContent: "flex-start",
  flexWrap: "wrap",
  "> li": {
    marginRight: "4px",
    marginBottom: "4px",
  },
};
