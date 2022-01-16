import { VFC } from 'react';

import { ContentWithRelation } from '~/pages/type';

import { makeFormalDateString } from '~/utils';

import { SlideFade } from '@chakra-ui/react';


import { 
  container,
  contentName,
  dateStyle,
  tagsContainer,
  tagStyle
  } from './style';

type Props = Pick<ContentWithRelation, 'name' | 'createdAt' | 'tags'>;

export const ContentCard: VFC<Props> = ({ 
  createdAt, 
  tags,
  name,
}) => {
  return (
    <SlideFade in={true} offsetY="30px" css={container}>
      <div css={dateStyle}>{makeFormalDateString(createdAt)}</div>
      <ul css={tagsContainer}>
        {tags.map(({ id, name }) => <li key={id} css={tagStyle}>{name}</li>)}
      </ul>
      <h2 css={contentName}>{name}</h2>
    </SlideFade>
  );
};
