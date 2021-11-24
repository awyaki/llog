import { VFC, MouseEventHandler } from 'react';

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
  return (
    <div css={container}>
      <h2 css={pageTitle}>Create New Content</h2>
      <div css={subContainer}>
        <NameBox />
        <SelectTags onClick={onClick} />
        <BlockBox />
      </div>
      <button css={buttonStyle}>
        OK
      </button>
    </div>
  );
};
