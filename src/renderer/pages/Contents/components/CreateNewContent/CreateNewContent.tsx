import { VFC, MouseEventHandler, useContext } from 'react';

import { ContentsContext } from '../../ContentsContextProvider';

import { SelectedTagsContext } from './SelectedTagsContextProvider';
import { BlockContext } from './BlockContextProvider';
import { NameContext } from './NameContextProvider';

import { container } from './style/container';
import { subContainer } from './style/subContainer';
import { buttonStyle } from './style/buttonStyle';

import { NameBox } from './components/NameBox';
import { SelectTags } from './components/SelectTags';
import { BlockBox } from './components/BlockBox';


import { pageTitle } from '~/pages/style/pageTitle';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CreateNewContent: VFC<Props> = ({ onClick }) => {
  const { dispatch } = useContext(ContentsContext);

  const { selectedTags } = useContext(SelectedTagsContext);
  const { name } = useContext(NameContext);
  const { block } = useContext(BlockContext);
  
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const newConent = await window.electronAPI.createContent(name, selectedTags, Number(block));
    console.log('CreateNewContent', newConent);
    const newContents = await window.electronAPI.getAllContent();
    dispatch({ type: 'CONTENTS/UPDATE', contents: newContents });
  };

  return (
    <div css={container}>
      <h2 css={pageTitle}>Create New Content</h2>
      <div css={subContainer}>
        <NameBox />
        <SelectTags onClick={onClick} />
        <BlockBox />
      </div>
      <button css={buttonStyle} onClick={handleClick}>
        OK
      </button>
    </div>
  );
};
