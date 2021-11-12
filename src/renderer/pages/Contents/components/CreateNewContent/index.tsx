import { VFC} from 'react';

import { container } from './style/container';
import { subContainer } from './style/subContainer';
import { buttonStyle } from './style/buttonStyle';

import { NameBox } from './components/NameBox';
import { SelectTags } from './components/SelectTags';
import { BlockBox } from './components/BlockBox';

import { pageTitle } from '~/pages/style/pageTitle';

export const CreateNewContent: VFC = () => {
  return (
    <div css={container}>
      <h2 css={pageTitle}>Create New Content</h2>
      <div css={subContainer}>
        <NameBox />
        <SelectTags />
        <BlockBox />
      </div>
      <button css={buttonStyle}>
        OK
      </button>
    </div>
  );
};
