import { CSSObject } from "@emotion/react";
import { colors } from "~/styleConfig/colors";

export const makeContainer = (isOn: boolean): CSSObject => {
  const base: CSSObject = {
    width: "18px",
    height: "18px",
    borderRadius: "999px",
    border: `1px solid ${colors.cyan.DEFAULT}`,
    marginRight: "10px",
  };

  const onStyle: CSSObject = {
    ...base,
    backgroundColor: colors.cyan.DEFAULT,
  };

  const offStyle: CSSObject = {
    ...base,
  };

  return isOn ? onStyle : offStyle;
};
