import { VFC } from 'react';

import { container } from './style/container';
import { makeFormalTimeString } from '~/utils';

type Props = {
  time: Date;
};

export const ModefitedAt: VFC<Props> = ({ time }) => {
  return (
    <div css={container}>{makeFormalTimeString(time)}</div>
  );
};
