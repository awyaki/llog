import { 
  VFC, 
  useContext
  } from 'react';

import { 
  EditIcon,
  ArrowUpIcon 
  } from '~/components';

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

const editIcon: Variants = {
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

const arrowIcon: Variants = {
  open: { rotate: 0 },
  close: { rotate: 180 },
};


export const ExpandAllBlocksButton: VFC<Props> = ({ ...rest }) => {
  const { isOpen, toggleIsOpen } = useContext(SelectBlocksContext);

  return (
    <motion.button
      onClick={toggleIsOpen}
      style={{ display: 'flex', alignItems: 'center' }} {...rest}>
      <motion.div
        variants={editIcon}
        animate={isOpen ? 'open' : 'close'}
        style={{
          width: '36px', 
          height: '36px', 
          borderWidth: '1px',
          borderStyle: 'solid',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
        }}>
        <EditIcon />
      </motion.div>
      <motion.div
        variants={arrowIcon}
        style={{ 
          display: 'flex',
          color: colors.cyan.DEFAULT,
          alignItems: 'center',
          }}
        animate={isOpen ? 'open' : 'close'}
      >
        <ArrowUpIcon css={{ fontSize: '20px' }}/>
      </motion.div>
    </motion.button>
  );
};
