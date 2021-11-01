import { VFC, MouseEventHandler } from 'react';

import { DetailViewBlocksButtonIcon } from './components/DetailViewBlocksButtonIcon';

type Props = {
  active: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const DetailViewBlocksButton: VFC<Props> = ({ active, onClick }) => {
  return (
    <button onClick={onClick}>
      <DetailViewBlocksButtonIcon active={active} />
    </button>
  );
};
