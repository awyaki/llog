import { VFC, MouseEventHandler } from 'react';

import { container } from './style';

type Props = {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Tag: VFC<Props> = ({ name, onClick }) => {
  return (
    <button onClick={onClick} css={container}>{name}</button>
  );
};
