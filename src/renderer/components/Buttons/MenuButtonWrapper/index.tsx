import { FC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import {
  motion
} from 'framer-motion';

type Props = {
  css?: CSSObject; 
};

export const MenuButtonWrapper: FC<Props> = ({
  children,
  ...rest
}) => {
  return (
    <motion.button
      initial={{
        x: 0,
        rotate: 0,
        borderColor: colors.white,
        color: colors.white,
        backgroundColor: colors.cyan.DEFAULT,
      }}
      whileHover={{
        x: 8,
        rotate: 30,
        backgroundColor: colors.white,
        color: colors.cyan.DEFAULT,
      }}
      style={{
        display: 'flex',
        rotate: 30,
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
