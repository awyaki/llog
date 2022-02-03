import { VFC } from 'react';

import { makeMiniBlockStyle } from '~/style';


type Props = {
  level: number
};

export const BlocksForOverview: VFC<Props> = ({ level }) => {
  return (
    <div css={makeMiniBlockStyle(level)}></div>
  );
};


