import { CSSObject } from "@emotion/react";
import { colors } from "~/styleConfig/colors";

export const makeContainer = (level: number): CSSObject => {
  const color = colors.cyan.LEVEL[level];

  const base: CSSObject = {
    width: "25px",
    height: "25px",
    borderWidth: "1px",
  };

  const zero: CSSObject = {
    ...base,
    borderWidth: "3px",
    borderStyle: "dashed",
    borderColor: colors.gray.DEFAULT,
  };

  const one: CSSObject = {
    ...base,
    borderStyle: "solid",
    borderColor: colors.gray.DEFAULT,
    backgroundColor: colors.gray.LIGHT,
  };

  const others: CSSObject = {
    ...base,
    borderStyle: "solid",
    borderColor: color,
    backgroundColor: color,
  };

  if (level === 0) return zero;
  if (level === 1) return one;
  return others;
};
