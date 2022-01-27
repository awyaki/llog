import { VFC } from 'react';

import { TagsList } from '~/components';

import { ContentWithRelation } from '~/pages/type';

import { makeFormalTimeString } from '~/utils';

import { 
  colors,
  font
} from '~/styleConfig';


import {
  motion,
  Variants
} from 'framer-motion';

type Props = Pick<ContentWithRelation, 'name' | 'createdAt' | 'tags'>;

const containerMotions: Variants = {
  normal: {
    scale: 1,
    borderColor: colors.cyan.DEFAULT,
    backgroundColor: colors.cyan.DEFAULT,
    color: colors.white,
  },
  delta: {
    scale: 1.01,
    backgroundColor: colors.white,
    borderColor: colors.cyan.DEFAULT,
    color: colors.cyan.DEFAULT,
  },
};

const tagListMotions: Variants = {
  normal: {
    borderColor: colors.white,
    backgroundColor: colors.cyan.DEFAULT,
    color: colors.white,
  },
  delta: {
    borderColor: colors.cyan.DEFAULT,
    backgroundColor: colors.white,
    color: colors.cyan.DEFAULT,
  },
};

export const ContentCard: VFC<Props> = ({ 
  createdAt, 
  tags,
  name,
}) => {
  return (
    <motion.div 
      variants={containerMotions}
      style={{
        width: '100%',
        borderWidth: '1px',
        borderStyle: 'solid',
        boxShadow: '1px 1px 12px 1px rgba(0, 0, 0, .3)',
        borderRadius: '5px',
        padding: '16px',
      }}
      initial="normal"
      whileHover="delta"
      whileFocus="delta">
      <div css={{
        fontSize: font.size.SS,
        marginBottom: '6px',
      }}>{makeFormalTimeString(createdAt)}</div>
      <TagsList 
        variants={tagListMotions}
        css={{ marginBottom: '8px' }}
        tags={tags}
        secandary />
      <h2 css={{ fontSize: font.size.M }}>{name}</h2>
    </motion.div>
  );
};
