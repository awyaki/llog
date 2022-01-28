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
  disableInitail: {
    borderColor: colors.gray.DEFAULT,
    backgroundColor: colors.gray.DEFAULT,
    color: colors.white,
  },
  disableHover: {
    scale: 1.1,
  },
  disableTap: {
    x: [-8, 0, 8, 0],
    transition: { duration: 0.1 }
  },
};

type Props = {
  css?: CSSObject;
  disable?: boolean;
} & HTMLMotionProps<"button">;

export const DisabableButtonAnimationWrapper: FC<Props> = ({
  css,
  children,
  disable,
  ...rest
}) => {
  return (
    <motion.button
      variants={containerMotions}
      initial={disable ? "disableInitail" : "initial"}
      whileHover={disable ? "disableHover" : "delta"}
      whileFocus={disable ? undefined : "delta"}
      whileTap={disable ? "disableTap" : undefined}
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
