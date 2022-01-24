import { FC, ButtonHTMLAttributes } from 'react';

import { colors } from '~/styleConfig';

export const WarningButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return (
    <button css={{
      width: '110px',
      padding: '5px 8px',
      transition: '.25s',
      color: colors.white,
      backgroundColor: colors.red.DEFAULT,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.red.DEFAULT,
      borderRadius: '4px',
      '&:hover, focus': {
        backgroundColor: colors.white,
        color: colors.red.DEFAULT,
      }
    }}
    {...rest}>
      {children}
    </button>
  );
};
