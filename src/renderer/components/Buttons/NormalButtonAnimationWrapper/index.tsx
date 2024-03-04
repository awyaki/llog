import { FC } from "react";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

import { motion, HTMLMotionProps, Variants } from "framer-motion";

const containerMotions: Variants = {
  initial: {
    borderColor: colors.cyan.DEFAULT,
    color: colors.white,
    backgroundColor: colors.cyan.DEFAULT,
  },
  delta: {
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
  },
};

type Props = {
  css?: CSSObject;
} & HTMLMotionProps<"button">;

export const NormalButtonAnimationWrapper: FC<Props> = ({
  css,
  children,
  ...rest
}) => {
  return (
    <motion.button
      variants={containerMotions}
      initial="initial"
      whileHover="delta"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40px",
        height: "40px",
        borderRadius: "4px",
        padding: "5px",
        borderWidth: "1px",
        borderStyle: "solid",
        textAlign: "center",
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
