import { VFC, MouseEventHandler } from 'react';

import { OverviewBlocksButtonIcon } from './components/OverviewBlocksButtonIcon';

type Props = {
  active: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const OverviewBlocksButton: VFC<Props> = ({ active, onClick }) => {
  return (
    <button onClick={onClick}>
      <OverviewBlocksButtonIcon active={active} />
    </button>
  );
};
