import { FC } from "react";

import { font, colors } from "~/styleConfig";

import { CSSObject } from "@emotion/react";

import { motion, HTMLMotionProps, Variants } from "framer-motion";

type Props = {
  css?: CSSObject;
  secandary?: boolean;
} & HTMLMotionProps<"button">;

const containerMotions: Variants = {
  delta: {
    borderColor: colors.cyan.DEFAULT,
    backgroundColor: colors.cyan.DEFAULT,
    color: colors.white,
  },
};

export const TagAnimationButtonWrapper: FC<Props> = ({
  onClick,
  secandary,
  children,
  ...rest
}) => {
  return (
    <motion.button
      onClick={onClick}
      variants={containerMotions}
      whileHover="delta"
      whileFocus="delta"
      style={{
        display: "flex",
        height: "23px",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "80px",
        textAlign: "center",
        fontSize: font.size.SS,
        borderRadius: "4px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: colors.cyan.DEFAULT,
        backgroundColor: colors.white,
        color: colors.cyan.DEFAULT,
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
