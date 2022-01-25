import { VFC } from 'react';

import { TagsList } from '~/components';

import { ContentWithRelation } from '~/pages/type';

import { makeFormalTimeString } from '~/utils';

import { SlideFade } from '@chakra-ui/react';


import { 
  container,
  contentName,
  dateStyle,
  } from './style';

type Props = Pick<ContentWithRelation, 'name' | 'createdAt' | 'tags'>;

export const ContentCard: VFC<Props> = ({ 
  createdAt, 
  tags,
  name,
}) => {
  return (
    <SlideFade in={true} offsetY="30px" css={container} unmountOnExit={true}>
      <div css={dateStyle}>{makeFormalTimeString(createdAt)}</div>
      <TagsList 
        css={{ marginBottom: '8px',}}
        tags={tags}
        secandary />
      <h2 css={contentName}>{name}</h2>
    </SlideFade>
  );
};
