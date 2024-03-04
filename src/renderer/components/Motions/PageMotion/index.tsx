import { FC } from "react";

import { CSSObject } from "@emotion/react";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -30 },
};

type Props = {
  css?: CSSObject;
};

export const PageMotion: FC<Props> = ({ children, ...rest }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      {...rest}
    >
      {children}
    </motion.div>
  );
};
