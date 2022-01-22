import { VFC, useContext } from 'react';

import { container } from './style';

import { EditIcon } from './components';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const OpenModalToUpdateContentTagsButton: VFC = () => {
  const { onOpenModalToUpdateContentTags } = useContext(SelectedTagsContext);
  return (
    <button 
      css={container}
      type="button"
      onClick={onOpenModalToUpdateContentTags}>
      <EditIcon />
    </button>
  );
};
