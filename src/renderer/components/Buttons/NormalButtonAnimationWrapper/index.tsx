import { FC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import {
  motion,
  HTMLMotionProps,
  Variants
} from 'framer-motion';


const containerMotions: Variants = {
  initial: {
    scale: 1,
    borderColor: colors.cyan.DEFAULT,
    color: colors.white,
    backgroundColor: colors.cyan.DEFAULT,
  },
  delta: {
    scale: 1.1,
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
  },
  tap: {
    scale: 0.7
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
      whileTap="tap"
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
