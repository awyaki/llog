import { VFC, useContext } from 'react';

import { CreateNewTagIcon } from './components';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const CreateTagButton: VFC = () => {
  const { onOpenModalToCreateTag } = useContext(SelectedTagsContext);

  return (
    <button type="button" onClick={onOpenModalToCreateTag}>
      <CreateNewTagIcon />
    </button>
  );
};
