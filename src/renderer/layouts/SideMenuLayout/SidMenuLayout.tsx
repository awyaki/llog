import { VFC } from 'react';

import { colors } from '~/styleConfig';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

const SideMenu: VFC<SideMenuProps> = ({ 
  isOpen,
  onClose,
  children,
  }) => {
  return (
    <aside css={{
      position: 'relative',
      width: isOpen ? '250px' : '0px',
      minWidth: isOpen ? '250px' : '0px',
      height: '100%',
      zIndex: 1,
      transitionProperty: 'width minWidth',
      transitionDuration: '.5s',
      transitionTimingFunction: 'ease',
      marginLeft: '16px',
    }}>
      <div css={{ 
          display: isOpen ? 'block' : 'none',
          position: 'fixed',
          paddingLeft: '24px',
          borderLeft: `1px solid ${colors.cyan.DEFAULT}`,
          height: '100%',
        }}>
      <button 
        css={{
          width: '100%',
          display: 'block',
          textAlign: 'right',
          marginBottom: '16px',
        }}
        onClick={onClose}>X</button>
        {children}
      </div>
    </aside>
  );
};



type SideMenuLayoutProps = {
  isOpen: boolean;
  onClose: () => void;
  main: JSX.Element;
  side: JSX.Element;
};

export const SideMenuLayout: VFC<SideMenuLayoutProps> = ({
  main,
  side,
  isOpen,
  onClose
}) => {
  return (
    <div css={{ display: 'flex', height: '100%', width: '100%' }}>
      <div css={{ flexGrow: 1 }}>
        {main}
      </div>
      <SideMenu 
        isOpen={isOpen} 
        onClose={onClose}>
        {side}
      </SideMenu>
    </div>
  );
};
