import { VFC } from 'react';

import { tagStyle } from './style/tagStyle';

type Props = {
  name: string;
};

export const Tag: VFC<Props> = ({ name }) => {
  return (
    <button css={tagStyle}>
      {name}
    </button>
  );
};
