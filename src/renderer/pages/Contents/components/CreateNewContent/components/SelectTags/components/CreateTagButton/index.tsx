import { VFC, MouseEventHandler } from 'react';


import { CreateTagIcon } from './components/CreateTagIcon';
import { createTagButton } from './style/createTagButton';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
}; 

export const CreateTagButton: VFC<Props> = ({ onClick }) => {
  return (
    <button css={createTagButton} onClick={onClick}>
      <CreateTagIcon />
    </button>
  );
};
