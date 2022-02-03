import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { makeMiniBlockStyle } from '~/style';

import { Block } from '@prisma/client';

type Props = {
  css?: CSSObject;
  blocks: Block[];
};

export const MiniBlockList: VFC<Props> = ({ blocks, ...rest }) => {
  return (
    <ul css={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      '> li': {
        marginRight: '2px',
        marginBottom: '2px',
      },
    }} {...rest}>
      {blocks.map(({ id, level }) => <li key={id} css={makeMiniBlockStyle(level)}></li>)}
    </ul>
  );
};
