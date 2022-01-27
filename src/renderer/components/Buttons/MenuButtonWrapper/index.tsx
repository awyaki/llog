import { FC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import {
  motion,
  HTMLMotionProps,
  Variants
} from 'framer-motion';

type Props = {
  css?: CSSObject; 
} & HTMLMotionProps<"button">;

const buttonMotions: Variants = {
  initial: {
    x: 0,
    scale: 1,
    borderColor: colors.white,
    color: colors.white,
    backgroundColor: colors.cyan.DEFAULT,
  },
  delta: {
    x: 8,
    scale: 1.1,
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
  },
};

export const MenuButtonWrapper: FC<Props> = ({
  children,
  ...rest
}) => {
  return (
    <motion.button
      variants={buttonMotions}
      initial="initial"
      whileHover="delta"
      whileFocus="delta"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        height: '30px',
        borderRadius: '20px',
        padding: '5px',
        borderWidth: '1px',
        borderStyle: 'solid',
        textAlign: 'center',
      }} {...rest}>
      {children}
    </motion.button>
  );
};
