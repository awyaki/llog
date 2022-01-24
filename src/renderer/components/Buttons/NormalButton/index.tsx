import { FC, ButtonHTMLAttributes } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

type Props = {
  css?: CSSObject;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const NormalButton: FC<Props> = ({ children, ...rest }) => {
  return (
    <button css={{
      padding: '5px 16px',
      transition: '.25s',
      color: colors.white,
      backgroundColor: colors.cyan.DEFAULT,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.cyan.DEFAULT,
      borderRadius: '4px',
      textAlign: 'center',
      '&:hover, &:focus': {
        backgroundColor: colors.white,
        color: colors.cyan.DEFAULT,
      }
    }}
    {...rest}>
      {children}
    </button>
  );
};
