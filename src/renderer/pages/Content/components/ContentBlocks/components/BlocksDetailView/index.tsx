import { VFC } from 'react';

import { BlocksContainer } from './components/BlocksContainer';
import { title } from './style/title';

import { makeBlocks } from '~/stub/blocks';


const blocks = makeBlocks(220);
export const BlocksDetailView: VFC = () => {
  return (
    <div>
      <h2 css={title}>Detail view</h2>
      <BlocksContainer blocks={blocks} />
    </div>
  );
};
