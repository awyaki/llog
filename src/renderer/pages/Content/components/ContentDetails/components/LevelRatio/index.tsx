import { VFC } from 'react';

import { LevelInfo } from './components/LevelInfo';
import { container } from './style/container';

export const LevelRatio: VFC = () => {
  return (
    <ul css={container}>
      <li><LevelInfo level={0} ratio="245（50％）" /></li>
      <li><LevelInfo level={1} ratio="49（10％）" /></li>
      <li><LevelInfo level={2} ratio="49（10％）" /></li>
      <li><LevelInfo level={3} ratio="49（10％）" /></li>
      <li><LevelInfo level={4} ratio="49（10％）" /></li>
      <li><LevelInfo level={5} ratio="49（10％）" /></li>
    </ul>
  );
};
