import { VFC, useContext } from 'react';

import { EditIcon } from './components';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const EditSelectedTagsButton: VFC = () => {
  const { onOpenModalToSelectTags } = useContext(SelectedTagsContext);
  return (
    <button type="button" onClick={onOpenModalToSelectTags}>
      <EditIcon />
    </button>
  );
};
