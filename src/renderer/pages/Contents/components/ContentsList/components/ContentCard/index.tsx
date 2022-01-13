import { VFC } from 'react';

import { ContentWithRelation } from '~/pages/type';

import { Box } from '@chakra-ui/react';

import { makeFormalDateString } from '~/utils';

import { 
  container,
  contentName,
  tagStyle,
  tagContainer
  } from './style';

type Props = Pick<ContentWithRelation, 'name' | 'createdAt' | 'tags'>;

export const ContentCard: VFC<Props> = ({ 
  createdAt, 
  name,
  tags
}) => {
  return (
    <Box css={container}>
      <div>{makeFormalDateString(createdAt)}</div>
      <h2 css={contentName}>{name}</h2>
      <ul css={tagContainer}>
        {tags.map(({ id, name }) => <li key={id} css={tagStyle}>{name}</li>)}
      </ul>
    </Box>
  );
};
