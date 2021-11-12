import { VFC } from 'react';

import { container } from './style/container';

type Props = {
  created: string,
  latest: string,
  blocks: number,
  streak: number,
};

export const BasicInfo: VFC<Props> = ({ created, latest, blocks, streak }) => {
  return (
    <ul css={container}>
      <li>Created time：{created}</li>
      <li>Latest commit：{latest}</li>
      <li>Blocks：{blocks}</li>
      <li>Streak：{streak}</li>
    </ul>
  );
};
