import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

import { motion, Variants, TargetAndTransition } from "framer-motion";

type ColorOptions = {
  primary: string;
  secondary: string;
};

type Props = {
  css?: CSSObject;
  text: string;
  onClick: () => void;
  colorOptions?: ColorOptions;
  isDisable: boolean;
};

const makeVariants = ({ primary, secondary }: ColorOptions): Variants => {
  return {
    normal: {
      backgroundColor: primary,
      borderColor: primary,
      color: secondary,
      transition: { duration: 0.1, ease: "linear" },
    },
    hover: {
      backgroundColor: secondary,
      color: primary,
      transition: { duration: 0.1, ease: "linear" },
    },
    disabled: {
      backgroundColor: colors.gray.DEFAULT,
      borderColor: colors.gray.DEFAULT,
      color: colors.white,
    },
  };
};

export const DisabableNormalButton: VFC<Props> = ({
  isDisable,
  onClick,
  text,
  colorOptions = { primary: colors.cyan.DEFAULT, secondary: colors.white },
  ...rest
}) => {
  const variants = makeVariants(colorOptions);

  return (
    <motion.button
      onClick={onClick}
      variants={variants}
      disabled={isDisable}
      animate={isDisable ? "disabled" : "normal"}
      initial={isDisable ? "disabled" : "normal"}
      whileHover={isDisable ? undefined : "hover"}
      style={{
        textAlign: "center",
        padding: "5px 16px",
        transition: ".25s",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "4px",
      }}
      {...rest}
    >
      {text}
    </motion.button>
  );
};
