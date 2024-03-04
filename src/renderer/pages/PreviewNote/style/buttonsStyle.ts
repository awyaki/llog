import { CSSObject } from "@emotion/react";

export const buttonsStyle: CSSObject = {
  display: "flex",
  marginBottom: "16px",
  "> li": {
    marginRight: "4px",
  },
  "> li:nth-last-of-type(1)": {
    marginRight: "0",
  },
};
