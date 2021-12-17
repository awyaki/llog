import { VFC } from 'react';
import { CreateNewTagIcon } from './components/CreateNewTagIcon';

type Props = {
  onOpenCreateNewTagModal: () => void;
};

export const CreateNewTag: VFC<Props> = ({ onOpenCreateNewTagModal }) => {
  return (
    <button onClick={onOpenCreateNewTagModal}>
      <CreateNewTagIcon />
    </button>
  );
};
