import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { Block } from '@prisma/client';

import { BlocksOverview, BlocksDetailView} from './components';

type Props = {
  blocks: Block[];
  css?: CSSObject;
  isOverView: boolean;
};

export const ContentBlocks: VFC<Props> = ({ 
  blocks, 
  isOverView,
  ...rest }) => {
  return (
    <div {...rest}>
      {isOverView ? <BlocksOverview blocks={blocks} /> : <BlocksDetailView blocks={blocks} />}
    </div>
  );
};
