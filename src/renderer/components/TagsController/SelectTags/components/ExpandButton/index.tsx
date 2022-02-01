import { 
  VFC,
  useContext
  } from 'react';

import { CSSObject } from '@emotion/react';

import {
  colors,
  font
} from '~/styleConfig';

import { 
  EditIcon,
  ArrowUpIcon,
  } from '~/components';

import { 
  motion, 
  Variants
  } from 'framer-motion';

import {
  SelectTagsContext
} from '~/components';

type Props = {
  css?: CSSObject;
};


const editIcon: Variants = {
  open: {
    color: colors.cyan.DEFAULT,
    backgroundColor: colors.white,
  },
  close: {
    color: colors.white,
    backgroundColor: colors.cyan.DEFAULT,
  },
};

const arrowIcon: Variants = {
  open: { rotate: 0 },
  close: { rotate: 180 },
};

export const ExpandButton: VFC<Props> = ({ ...rest }) => {
  const { isOpen, toggleIsOpen } = useContext(SelectTagsContext);

  return (
    <motion.button 
      type="button"
      onClick={toggleIsOpen} 
      {...rest}>
      <div css={{
        display: 'flex',
      }}>
        <motion.div 
            variants={editIcon}
            animate={isOpen ? "open" : "close"}
            style={{
              display: 'flex',
              minWidth: '80px',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: font.size.SS,
              borderRadius: '4px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: colors.cyan.DEFAULT,
              padding: '2px 4px',
              marginRight: '16px',
            }}
            css={{ display: 'flex' }}>
          <EditIcon/>
        </motion.div>

        <motion.div
          variants={arrowIcon}
          style={{ color: colors.cyan.DEFAULT }}
          animate={isOpen ? "open" : "close"}>
          <ArrowUpIcon css={{ fontSize: '20px' }}/>
        </motion.div>
      </div>
    </motion.button>
  );
};
