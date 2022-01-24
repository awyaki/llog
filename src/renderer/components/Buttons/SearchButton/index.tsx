import { VFC, ButtonHTMLAttributes } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import { SearchIcon } from '~/components';

type Props = {
  css?: CSSObject;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export const SearchButton: VFC<Props> = ({ ...rest }) => {
  return (
    <button css={{
      width: '32px',
      height: '32px',
      padding: '5px',
      backgroundColor: colors.cyan.DEFAULT,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.cyan.DEFAULT,
      transition: '.25s',
      color: colors.white,
      '&:hover, &:focus': {
        color: colors.cyan.DEFAULT,
        backgroundColor: colors.white,
      }
    }} {...rest}>
      <SearchIcon />
    </button>
  );
};
