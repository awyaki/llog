import { VFC } from 'react';

import { container } from './style/container';

import { SearchCondition } from '~/stub/types';

type Props = {
  op: SearchCondition['op'];
};

export const OpSwitch: VFC<Props> = ({ op }) => {
  return <button css={container}>{op}</button>;
};
