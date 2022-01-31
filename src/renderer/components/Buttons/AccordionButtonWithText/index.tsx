import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors, font } from '~/styleConfig';

import { ArrowUpIcon } from '~/components';

import {
  motion,
  Variants
} from 'framer-motion';


type Props = {
  isOpen: boolean;
  text: string;
  css?: CSSObject;
  onClick?: () => void;
}


const container: Variants = {
  open: {
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
  },
  close: {
    backgroundColor: colors.cyan.DEFAULT,
    color: colors.white,
  },
};

const icon: Variants = {
  open: { rotate: 0 },
  close: { rotate: 180 },
};

export const AccordionButtonWithText: VFC<Props> = ({ 
  isOpen, 
  text,
  onClick,
  ...rest
  }) => {
  return (
    <motion.button 
      onClick={onClick}
      variants={container}
      animate={isOpen ? "open" : "close"}
      style={{
        padding: '8px 16px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '4px',
        borderColor: colors.cyan.DEFAULT,
        textAlign: 'center',
      }}
      {...rest}>
      <div css={{
        display: 'flex',
      }}>
        <div css={{ marginRight: '8px' }}>{text}</div>
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
          variants={icon}
        >
          <ArrowUpIcon css={{ fontSize: font.size.M }}/>
        </motion.div>
      </div>
    </motion.button>
  );
};
