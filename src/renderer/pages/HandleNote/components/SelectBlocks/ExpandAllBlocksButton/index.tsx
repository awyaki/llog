import { 
  VFC, 
  useContext
  } from 'react';

import { EditIcon } from '~/components';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { 
  motion,
  Variants
  } from 'framer-motion';

import { SelectBlocksContext } from '../SelectBlocksContextProvider';

type Props = {
  css?: CSSObject;
};

const variants: Variants = {
  open: {
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
    borderColor: colors.cyan.DEFAULT,
  },
  close: {
    backgroundColor: colors.cyan.DEFAULT,
    color: colors.white,
    borderColor: colors.cyan.DEFAULT,
  },
};


export const ExpandAllBlocksButton: VFC<Props> = ({ ...rest }) => {
  const { isOpen, toggleIsOpen } = useContext(SelectBlocksContext);

  return (
    <motion.button
      onClick={toggleIsOpen}
      variants={variants}
      animate={isOpen ? 'open' : 'close'}
      style={{
        width: '36px', 
        height: '36px', 
        borderWidth: '1px',
        borderStyle: 'solid',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      }} {...rest}>
      <EditIcon />
    </motion.button>
  );
};
