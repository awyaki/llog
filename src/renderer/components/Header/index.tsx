import { FC } from 'react';

import { colors } from '~/styleConfig';

export const Header: FC = ({ children }) => {
  return (
    <div css={{ 
      backgroundColor: colors.cyan.DEFAULT,
      height: '80px',
      padding: '16px',
    }}>
      {children}
    </div>
  );
};
