import { VFC, MouseEventHandler } from "react";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig/colors";

import { EditIcon } from "~/components";

import { motion, Variants } from "framer-motion";

type Props = {
  css?: CSSObject;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const containerMotions: Variants = {
  initial: {
    color: colors.cyan.DEFAULT,
    backgroundColor: colors.white,
    borderColor: colors.cyan.DEFAULT,
  },
  delta: {
    scale: 1.1,
    backgroundColor: colors.cyan.DEFAULT,
    color: colors.white,
  },
};

export const SelectBlockButton: VFC<Props> = ({ onClick, ...rest }) => {
  return (
    <motion.button
      variants={containerMotions}
      initial="initial"
      whileHover="delta"
      whileFocus="delta"
      onClick={onClick}
      style={{
        width: "36px",
        height: "36px",
        borderWidth: "1px",
        borderStyle: "solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...rest}
    >
      <EditIcon />
    </motion.button>
  );
};
