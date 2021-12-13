import { VFC, MouseEventHandler } from 'react';

import { EditIcon } from './components/EditIcon';

import { container } from './style/container';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const EditTagsButton: VFC<Props> = ({ onClick }) => {
  return (
    <button css={container} onClick={onClick}>
      <EditIcon />
    </button>
  );
};
