import { VFC } from 'react';
import { CreateNewTagIcon } from './components/CreateNewTagIcon';
import { container } from './style';

type Props = {
  onOpen: () => void;
};

export const CreateNewTag: VFC<Props> = ({ onOpen }) => {
  return (
    <button css={container} onClick={onOpen}>
      <CreateNewTagIcon />
    </button>
  );
};
