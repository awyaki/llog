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
  },
  delta: {
    scale: 1.01,
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
        borderBottomWidth: '2px',
        borderStyle: 'solid',
        padding: '16px',
        borderColor: colors.cyan.THIRD,
        color: colors.cyan.DEFAULT,
      }}
      initial="normal"
      whileHover="delta"
      whileFocus="delta">
      <div css={{
        fontSize: font.size.SS,
        marginBottom: '16px',
      }}>{makeFormalTimeString(createdAt)}</div>
      <TagsList 
        css={{ marginBottom: '8px' }}
        tags={tags} />
      <h2 css={{ fontSize: font.size.M }}>{name}</h2>
    </motion.div>
  );
};
