import { VFC } from 'react';
import { LatestIsBottomIcon } from './components/LatestIsBottomIcon';

type Props = {
  active: boolean;
};

export const LatestIsBottomButton: VFC<Props> = ({ active }) => {
  return (
    <button>
      <LatestIsBottomIcon active={active} />
    </button>
  );
};
