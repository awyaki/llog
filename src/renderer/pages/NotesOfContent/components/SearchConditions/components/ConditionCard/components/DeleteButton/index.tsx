import { VFC, MouseEventHandler } from 'react';

import { DeleteButtonIcon } from './components/DeleteButtonIcon';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const DeleteButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <DeleteButtonIcon />
    </button>
  );
};
