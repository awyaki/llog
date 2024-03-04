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
  hover: {
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
  },
  disableInitail: {
    borderColor: colors.gray.DEFAULT,
    backgroundColor: colors.gray.DEFAULT,
    color: colors.white,
  },
};

type Props = {
  css?: CSSObject;
  disabled?: boolean;
} & HTMLMotionProps<"button">;

export const DisabableButtonAnimationWrapper: FC<Props> = ({
  css,
  children,
  disabled,
  ...rest
}) => {
  return (
    <motion.button
      initial={disabled ? "disableInitail" : "initial"}
      disabled={disabled}
      variants={containerMotions}
      animate={disabled ? "disableInitail" : "initial"}
      whileHover={disabled ? "disableHover" : "hover"}
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
