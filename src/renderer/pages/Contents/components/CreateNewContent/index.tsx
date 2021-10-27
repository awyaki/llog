import { VFC} from 'react';

import { container } from './style/container';
import { NameBox } from './components/NameBox';
import { SelectTags } from './components/SelectTags';

import { pageTitle } from '~/pages/style/pageTitle';

export const CreateNewContent: VFC = () => {
  return (
    <div css={container}>
      <h2 css={pageTitle}>Create New Content</h2>
      <NameBox />
      <SelectTags />
    </div>
  );
};
