import { VFC } from 'react';

import { container } from './style/container';

import { ContentBlocksForm } from '~/components';

type Props = {
  id: number;
  created: string;
  blocks: number;
  isUpsertBlocksMode: boolean;
};

export const BasicInfo: VFC<Props> = ({ id, created, blocks, isUpsertBlocksMode }) => {
  return (
    <ul css={container}>
      <li>Created time：{created}</li>
      <li css={{ display: 'flex' }}>
        <span>Blocks：</span>
        {isUpsertBlocksMode 
                    ? <ContentBlocksForm id={id} maxUnitNumber={blocks} /> 
                    : <span>blocks</span>}</li>
    </ul>
  );
};
