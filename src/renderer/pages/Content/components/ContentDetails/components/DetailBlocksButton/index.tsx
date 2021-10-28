import { VFC } from 'react';

import { DetailBlocksButtonIcon } from './components/DetailBlocksButtonIcon';

type Props = {
  active: boolean;
};

export const DetailBlocksButton: VFC<Props> = ({ active }) => {
  return (
    <button>
      <DetailBlocksButtonIcon active={active} />
    </button>
  );
};
