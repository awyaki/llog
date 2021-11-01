import { VFC, MouseEventHandler } from 'react';

import { DetailBlocksButtonIcon } from './components/DetailBlocksButtonIcon';

type Props = {
  active: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>; 
};

export const DetailBlocksButton: VFC<Props> = ({ active, onClick }) => {
  return (
    <button onClick={onClick}>
      <DetailBlocksButtonIcon active={active} />
    </button>
  );
};
