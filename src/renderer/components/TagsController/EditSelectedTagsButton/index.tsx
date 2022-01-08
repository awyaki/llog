import { VFC, useContext } from 'react';

import { EditIcon } from './components';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const EditSelectedButton: VFC = () => {
  const { onOpenModalToSelectTags } = useContext(SelectedTagsContext);
  return (
    <button onClick={onOpenModalToSelectTags}>
      <EditIcon />
    </button>
  );
};
