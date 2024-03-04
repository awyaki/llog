import { CSSObject } from "@emotion/react";

export const makeNoteListsStyle = (isOpen: boolean): CSSObject => {
  const openStyle: CSSObject = {
    display: "flex",
    justifyContent: "space-between",
    "> li": {
      width: "calc(100% - 22rem)",
      marginRight: "32px",
    },
    "> li:nth-of-type(2)": {
      marginRight: "0",
    },
  };

  const closeStyle: CSSObject = {
    display: "flex",
    justifyContent: "space-between",
    "> li": {
      width: "50%",
      marginRight: "32px",
    },
    "> li:nth-of-type(2)": {
      marginRight: "0",
    },
  };
  return isOpen ? openStyle : closeStyle;
};
