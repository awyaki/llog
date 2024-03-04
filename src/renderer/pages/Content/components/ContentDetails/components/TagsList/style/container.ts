import { CSSObject } from "@emotion/react";

export const container: CSSObject = {
  display: "flex",
  flexWrap: "wrap",
  maxHeight: "50px",
  overflowY: "scroll",
  "> li": {
    marginRight: "4px",
    marginBottom: "4px",
  },
};
