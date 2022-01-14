import { VFC } from 'react';

import { container } from './style/container';
import { makeFormalDateString } from '~/utils';

type Props = {
  time: Date;
};

export const ModefitedAt: VFC<Props> = ({ time }) => {
  return (
    <div css={container}>{makeFormalDateString(time)}</div>
  );
};
