import { VFC } from 'react';

import { colors, font } from '~/styleConfig';

import { makeCirlceContainer } from '../style';

type Props = {
  size: 'large' | 'small';
};

export const InfoIcon: VFC<Props> = ({ size }) => {
  return (
    <div css={makeCirlceContainer(size)}>
      <span css={{ color: colors.cyan.DEFAULT, fontSize: font.size.SS }}>Info.</span>
    </div>
  );
};
