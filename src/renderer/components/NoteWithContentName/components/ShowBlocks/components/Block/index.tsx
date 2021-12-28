import { VFC } from 'react';
import { makeContainer } from './style';

type Props = {
  unitNumber: number;
  level: number;
};

export const Block: VFC<Props> = ({ unitNumber, level }) => {
  return (
    <div css={makeContainer(level)}>{unitNumber}</div>
  );
};
