import { VFC } from 'react';

import { 
  SettingsIcon,
  MenuButtonWithText
  } from '~/components';

type Props = {
  onClick?: () => void;
};

export const SettingsButton: VFC<Props> = ({ 
  onClick,
}) => {
  return <MenuButtonWithText 
            text="Settings"
            Icon={SettingsIcon}
            onClick={onClick} />;
};
