import { VFC } from 'react';

import { colors } from '~/styleConfig';

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export const SideMenu: VFC<SideMenuProps> = ({ 
  isOpen,
  onClose,
  children,
  }) => {
  return (
    <aside css={{
      position: 'relative',
      width: isOpen ? '250px' : '0px',
      height: '100%',
      zIndex: 1,
      transitionProperty: 'width',
      transitionDuration: '.5s',
      transitionTimingFunction: 'ease',
    }}>
      <div css={{ 
          display: isOpen ? 'block' : 'none',
          position: 'absolute',
          top: 0,
          left: 0,
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
