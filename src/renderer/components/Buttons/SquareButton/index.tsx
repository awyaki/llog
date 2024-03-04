import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

import { motion, Variants } from "framer-motion";

type ColorVariants = {
  primary: string;
  secondary: string;
};

const makeVariants = ({ primary, secondary }: ColorVariants): Variants => {
  return {
    origin: {
      borderColor: primary,
      color: secondary,
      backgroundColor: primary,
    },

    reverse: {
      color: primary,
      backgroundColor: secondary,
    },
  };
};

type Props = {
  css?: CSSObject;
  colorOption?: ColorVariants;
  onClick?: () => void;
  Icon: VFC<{ css?: CSSObject }>;
};

export const SquareButton: VFC<Props> = ({
  Icon,
  colorOption = { primary: colors.cyan.DEFAULT, secondary: colors.white },
  onClick,
  ...rest
}) => {
  return (
    <motion.button
      onClick={onClick}
      variants={makeVariants(colorOption)}
      initial="origin"
      animate="origin"
      whileHover="reverse"
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
      <Icon css={{ fontSize: "20px" }} />
    </motion.button>
  );
};
