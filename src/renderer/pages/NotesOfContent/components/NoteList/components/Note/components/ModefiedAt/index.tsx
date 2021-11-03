import { VFC } from 'react';

import { container } from './style/container';
import { dateToString } from '~/utils/dateToString';

type Props = {
  time: Date;
};

export const ModefitedAt: VFC<Props> = ({ time }) => {
  return (
    <div css={container}>{dateToString(time)}</div>
  );
};
