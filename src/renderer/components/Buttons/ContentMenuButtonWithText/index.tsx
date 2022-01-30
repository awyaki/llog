import { VFC } from 'react';


import { 
  motion,
  Variants,
  } from 'framer-motion';

import { CSSObject } from '@emotion/react';

import {
  colors,
} from '~/styleConfig';

type Props = {
  Icon: VFC<{ css?: CSSObject }>;
  text: string;
  onClick?: () => void;
};


const motions: Variants = {
  initial: {
    color: colors.white,
    backgroundColor: colors.cyan.SECOND,
    borderColor: colors.cyan.SECOND
  },
  delta: {
    color: colors.cyan.SECOND,
    backgroundColor: colors.white,
    borderColor: colors.white,
  }
};

const icon: Variants = {
  initial: {
    color: colors.white,
    backgroundColor: colors.cyan.SECOND,
    borderColor: colors.white
  },
  delta: {
    color: colors.cyan.SECOND,
    backgroundColor: colors.white,
    borderColor: colors.cyan.SECOND,
  }
};

export const ContentMenuButtonWithText: VFC<Props> = ({ 
  Icon,
  onClick,
  text
}) => {
  return (
    <motion.button
      onClick={onClick}
      variants={motions}
      initial="initial"
      whileHover="delta"
      style={{
        width: '150px', 
        maxWidth: '150px',
        minWidth: '150px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '24px 16px 16px 24px',
      }}>
      <motion.div
        variants={icon}
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
          marginRight: '16px',
        }}>
        <Icon css={{ 
          width: '20px', 
          height: '20px'}} />
      </motion.div>
      <div>{text}</div>
    </motion.button>
  );
};
