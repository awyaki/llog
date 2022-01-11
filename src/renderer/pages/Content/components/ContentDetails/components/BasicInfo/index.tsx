import { VFC } from 'react';

import { container } from './style/container';

type Props = {
  created: string,
  blocks: number,
};

export const BasicInfo: VFC<Props> = ({ created, blocks }) => {
  return (
    <ul css={container}>
      <li>Created time：{created}</li>
      <li>Blocks：{blocks}</li>
    </ul>
  );
};
