import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import { motion } from 'framer-motion';


type Props = {
  css?: CSSObject;
  isOn: boolean;
  onClick: () => void;
};

export const Switch: VFC<Props> = ({ 
  isOn, 
  onClick,
  ...rest
  }) => {
  return (
    <motion.button
      onClick={onClick}
      layout
      style={{
        width: '80px',
        padding: '5px',
        display: 'flex',
        justifyContent: isOn ? 'flex-start' : 'flex-end',
        alignItems: 'center',
        borderRadius: '20px',
      }} {...rest}>
      <motion.div
        style={{
          width: '40px',
          height: '40px',
          borderColor: isOn ? colors.cyan.DEFAULT : colors.gray.DEFAULT,
          backgroundColor: isOn ? colors.cyan.DEFAULT : colors.gray.DEFAULT,
          borderRadius: '20px',
        }}>
      </motion.div>
    </motion.button>
  );
};
