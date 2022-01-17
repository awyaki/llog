import { VFC } from 'react';

import { makeCirlceContainer } from '../style';

type Props = {
  size: 'large' | 'small';
};

export const InfoIcon: VFC<Props> = ({ size }) => {
  return (
    <span css={makeCirlceContainer(size)}>Info.</span>
  );
};
