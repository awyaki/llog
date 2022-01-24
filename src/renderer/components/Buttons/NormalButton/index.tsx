import { FC, ButtonHTMLAttributes } from 'react';

import { colors } from '~/styleConfig';

export const NormalButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return (
    <button css={{
      width: '110px',
      padding: '5px 8px',
      transition: '.25s',
      color: colors.white,
      backgroundColor: colors.cyan.DEFAULT,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.cyan.DEFAULT,
      '&:hover, focus': {
        backgroundColor: colors.white,
        color: colors.cyan.DEFAULT,
      }
    }}
    {...rest}>
      {children}
    </button>
  );
};
