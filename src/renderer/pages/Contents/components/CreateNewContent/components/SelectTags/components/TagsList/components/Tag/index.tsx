import { VFC } from 'react';

import { makeTagStyle } from './style/makeTagStyle';

type Props = {
  name: string;
  isSelected: boolean;
};

export const Tag: VFC<Props> = ({ name, isSelected }) => {
  return (
    <button css={makeTagStyle(isSelected)}>
      {name}
    </button>
  );
};
