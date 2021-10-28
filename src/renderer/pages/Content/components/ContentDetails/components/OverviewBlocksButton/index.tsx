import { VFC } from 'react';

import { OverviewBlocksButtonIcon } from './components/OverviewBlocksButtonIcon';

type Props = {
  active: boolean;
};

export const OverviewBlocksButton: VFC<Props> = ({ active }) => {
  return (
    <button>
      <OverviewBlocksButtonIcon active={active} />
    </button>
  );
};
