import { VFC } from 'react';

import { Link } from 'react-router-dom';

import { EditNoteIcon } from '~/components';

type Props = {
  contentId: number;
  noteId: number;
};

export const EditNoteButton: VFC<Props> = ({ contentId, noteId }) => {
  return ( 
    <Link to={`/content/${contentId}/updatenote/${noteId}`}>
      <EditNoteIcon />
    </Link>
  );
};
