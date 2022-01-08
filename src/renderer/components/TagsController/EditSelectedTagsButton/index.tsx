import { VFC, useContext } from 'react';

import { container } from './style';

import { EditIcon } from './components';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const EditSelectedTagsButton: VFC = () => {
  const { onOpenModalToSelectTags } = useContext(SelectedTagsContext);
  return (
    <button 
      css={container}
      type="button"
      onClick={onOpenModalToSelectTags}>
      <EditIcon />
    </button>
  );
};
