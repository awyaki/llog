import { CSSObject } from "@emotion/react";

export const container: CSSObject = {
  display: "flex",
  flexWrap: "wrap",
  "> li": {
    marginLeft: "3px",
    marginBottom: "3px",
  },
};
