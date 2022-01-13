import { VFC, useContext } from 'react';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

import { container } from './style';

import { ReleaseIcon } from './components';


export const ReleaseSearchedTagsButton: VFC = () => {
  const { onReleaseSearchedTags } = useContext(SelectedTagsContext);
  return (
    <button
      css={container}
      type="button"
      onClick={onReleaseSearchedTags}>
      <ReleaseIcon />
    </button>
  );
};
