import { VFC, MouseEventHandler } from 'react';

import { CancelIcon } from './components';

type Props = {
  size?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CancelButton: VFC<Props> = ({ size = '36px', onClick }) => {
  return (
    <button onClick={onClick}>
      <CancelIcon size={size} />
    </button>
  );
};
