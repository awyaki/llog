import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { 
  motion, 
  Variants, 
  } from 'framer-motion';

const miniStyle: CSSObject = {
  width: '18px',
  height: '18px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.cyan.DEFAULT,
};

type Props = {
  css?: CSSObject;
  isOverView: boolean;
  onSwitch: () => void;
};

const variants: Variants = {
  overview: { scale: 1, rotate: 0 },
  normal: { scale: 2, rotate: 90 },
};

export const ViewSwitch: VFC<Props> = ({ 
  isOverView,
  onSwitch,
  ...rest
}) => {
  return (
    <button 
      onClick={onSwitch}
      css={{ 
        padding: '16px',
        border: `1px solid ${colors.cyan.DEFAULT}`}} {...rest}>
      <motion.div
        animate={isOverView ? 'overview' : 'normal'}
        variants={variants}
        transition={{ 
          type: 'tween', 
          duration: 0.1
          }}
        css={miniStyle}>
      </motion.div>
    </button>
  );
};
