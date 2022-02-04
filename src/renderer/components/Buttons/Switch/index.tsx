import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import { 
  motion,
  Variants
  } from 'framer-motion';


const makevariants = (color: string): Variants => {
  return {
      on: {
        borderColor: color,
      },
      off: {
        borderColor: colors.gray.DEFAULT,
      },
    };
  };

const circle: Variants = {
  on: { x: 19 },
  off: { x: 0 },
};

type Props = {
  css?: CSSObject;
  isOn: boolean;
  color?: string;
  onClick: () => void;
};

export const Switch: VFC<Props> = ({ 
  isOn, 
  color = colors.cyan.DEFAULT,
  onClick,
  ...rest
  }) => {

  const variants = makevariants(color);

  return (
    <motion.button
      onClick={onClick}
      variants={variants}
      animate={isOn ? 'on' : 'off'}
      style={{
        width: '50px',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        borderWidth: '1px',
        borderRadius: '20px',
      }} {...rest}>
      <motion.div
        variants={circle}
        animate={isOn ? 'on' : 'off' }
        style={{
          width: '20px',
          height: '20px',
          borderColor: isOn ? color : colors.gray.DEFAULT,
          backgroundColor: isOn ? color : colors.gray.DEFAULT,
          borderRadius: '20px',
        }}>
      </motion.div>
    </motion.button>
  );
};
