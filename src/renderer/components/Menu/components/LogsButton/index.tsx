import { VFC } from 'react';

import { 
  LogsIcon,
  MenuButtonWithText
  } from '~/components';

type Props = {
  onClick?: () => void;
};

export const LogsButton: VFC<Props> = ({ 
  onClick,
}) => {
  return <MenuButtonWithText 
            text="Logs"
            Icon={LogsIcon}
            onClick={onClick} />;
};
