import { VFC } from 'react';

import { ContentMenu } from '~/components';

type Props = {
  contentId: number;
  isNoteChange: boolean;
  confirmer: () => boolean;
};

export const SwitchingContentMenu: VFC<Props> = ({
  contentId,
  isNoteChange,
  confirmer
}) => {
  return (
    <ContentMenu 
      contentId={contentId}
      confirmer={isNoteChange ? confirmer : undefined} />
  );
};
