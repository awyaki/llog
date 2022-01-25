import { VFC, ButtonHTMLAttributes } from 'react';

import { CSSObject } from '@emotion/react';

import { InfoIcon } from '~/components/Icons';

import { menuButton } from '../style';

type Props = {
  css?: CSSObject;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const InfoButton: VFC<Props> = ({ ...rest }) => {
  return (
    <button 
      css={menuButton} {...rest}>
      <InfoIcon />
    </button>
  );
};
