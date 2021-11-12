import { VFC } from 'react';

import { LatestIsBottomButton } from './components/LatestIsBottomButton';
import { LatestIsTopButton } from './components/LatestIsTopButton';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { title } from './style/title';

export const SortByDate: VFC = () => {
  return (
    <div css={container}>
      <h2 css={title}>Date</h2>
      <div css={buttons}>
        <LatestIsTopButton active={true} />
        <LatestIsBottomButton active={true} />
      </div>
    </div>
  );
};
