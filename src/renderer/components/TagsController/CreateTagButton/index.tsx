import { VFC, useContext } from 'react';

import { container } from './style';

import { CreateNewTagIcon } from './components';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const CreateTagButton: VFC = () => {
  const { onOpenModalToCreateTag } = useContext(SelectedTagsContext);

  return (
    <button
      css={container}
      type="button"
      onClick={onOpenModalToCreateTag}>
      <CreateNewTagIcon />
    </button>
  );
};
