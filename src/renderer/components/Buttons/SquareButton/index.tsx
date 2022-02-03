import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import {
  motion,
  Variants,
  TargetAndTransition
} from 'framer-motion';


type ColorVariants = {
  primary: string,
  secondry: string,
};

const makeVariants = ({ 
  primary, 
  secondry}: ColorVariants): Variants  => {

    return {

      origin: {
        x: 0,
        scale: 1,
        borderColor: primary,
        color: secondry,
        backgroundColor: primary,
      },

      reverse: {
        scale: 1.1,
        color: primary,
        backgroundColor: secondry,
      },
    };

};

type Props = {
  css?: CSSObject;
  colorOption: ColorVariants;
  Icon: VFC<{ css?: CSSObject}>;
};

export const SquareButton: VFC<Props> = ({ 
  Icon, 
  colorOption = { primary: colors.cyan.DEFAULT, secondry: colors.white },
  ...rest }) => {

  return (
    <motion.button
      variants={makeVariants(colorOption)}
      initial="origin"
      whileHover="reverse"
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
      }}
      {...rest}>
      <Icon css={{ fontSize: '20px' }}/>
    </motion.button>
  );
};
