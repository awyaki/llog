import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { 
  motion, 
  Variants, 
  } from 'framer-motion';

type Props = {
  css?: CSSObject;
  isOverView: boolean;
  onSwitch: () => void;
};

const variants: Variants = {
  overview: { scale: 1 },
  normal: {  
    scale: 1.8,
    borderRadius: '4px',
    },
};

export const ViewSwitch: VFC<Props> = ({ 
  isOverView,
  onSwitch,
  ...rest
}) => {
  return (
    <motion.button
      onClick={onSwitch} 
      animate={isOverView ? 'overview' : 'normal'}
      variants={variants}
      transition={{ duration: 0.1 }}
      style={{
        width: '18px',
        height: '18px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colors.cyan.DEFAULT,
        backgroundColor: colors.cyan.DEFAULT,
      }}
      {...rest}>
    </motion.button>
  );
};
