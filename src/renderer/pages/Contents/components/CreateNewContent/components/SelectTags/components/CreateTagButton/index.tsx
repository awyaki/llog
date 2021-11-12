import { VFC } from 'react';

import { CreateTagIcon } from './components/CreateTagIcon';
import { createTagButton } from './style/createTagButton';

export const CreateTagButton: VFC = () => {
  return (
    <button css={createTagButton}>
      <CreateTagIcon />
    </button>
  );
};
