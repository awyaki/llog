import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { menuButton } from './style';

import { HomeIcon } from '../Icons';

import { Link } from 'react-router-dom';

export const Menu: VFC = () => {
  return (
    <div css={{ 
        height: '100vh',
        position: 'sticky',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '90px', 
        padding: '120px 16px 16px 16px', 
        backgroundColor: colors.cyan.DEFAULT,
        marginRight: '8px',
      }}>
      <Link css={menuButton} to="/">
        <HomeIcon />
      </Link>
    </div>
  );
};
