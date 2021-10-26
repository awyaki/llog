import { VFC } from 'react';

import { LatestTopIcon } from './components/LatestIsTopIcon';

type Props = {
  active: boolean;
};

export const LatestIsTopButton: VFC<Props> = ({ active }) => {
  return (
    <button>
      <LatestTopIcon active={active} />
    </button>
  );
};
