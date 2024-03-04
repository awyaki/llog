import { CSSObject } from "@emotion/react";

export const container: CSSObject = {
  width: "320px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginBottom: "64px",
  "> li": {
    marginBottom: "8px",
  },
};
