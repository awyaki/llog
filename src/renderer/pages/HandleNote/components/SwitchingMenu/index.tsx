import { VFC } from 'react';

import { Menu } from '~/components';

type Props = {
  isNoteChange: boolean;
  confirmer: () => boolean;
};

export const SwitchingMenu: VFC<Props> = ({
  isNoteChange,
  confirmer
}) => {
  return (
    <Menu confirmer={isNoteChange ? confirmer : undefined}/>
  );
};
