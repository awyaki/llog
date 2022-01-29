import { VFC } from 'react';

import { 
  TagsIcon,
  MenuButtonWithText
  } from '~/components';

type Props = {
  onClick?: () => void;
};

export const TagsButton: VFC<Props> = ({ 
  onClick,
}) => {
  return <MenuButtonWithText
          text="Tags"
          Icon={TagsIcon}
          onClick={onClick}
          />
};
