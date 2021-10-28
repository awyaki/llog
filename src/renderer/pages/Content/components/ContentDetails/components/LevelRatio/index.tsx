import { VFC } from 'react';

import { LevelInfo } from './components/LevelInfo';
import { container } from './style/container';

export const LevelRatio: VFC = () => {
  return (
    <div css={container}>
      <LevelInfo level={0} ratio="245（50％）" />
      <LevelInfo level={1} ratio="49（10％）" />
      <LevelInfo level={2} ratio="49（10％）" />
      <LevelInfo level={3} ratio="49（10％）" />
      <LevelInfo level={4} ratio="49（10％）" />
      <LevelInfo level={5} ratio="49（10％）" />
    </div>
  );
};
