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
  secondary?: boolean;
} & HTMLMotionProps<"button">;

const makeButtonMotions = (secondary?: boolean): Variants => {
  return {
    initial: {
      x: 0,
      scale: 1,
      borderColor: colors.white,
      color: colors.white,
      backgroundColor: secondary ? colors.cyan.SECOND : colors.cyan.DEFAULT,
    },
    delta: {
      scale: 1.1,
      backgroundColor: colors.white,
      color: secondary ? colors.cyan.SECOND : colors.cyan.DEFAULT,
    },
  }
};

export const MenuButtonWrapper: FC<Props> = ({
  children,
  secondary,
  ...rest
}) => {
  return (
    <motion.button
      variants={makeButtonMotions(secondary)}
      initial="initial"
      whileHover="delta"
      whileFocus="delta"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '4px',
        padding: '5px',
        borderWidth: '1px',
        borderStyle: 'solid',
        textAlign: 'center',
      }} {...rest}>
      {children}
    </motion.button>
  );
};
