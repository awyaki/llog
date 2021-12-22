import { VFC } from 'react';

import { Link } from 'react-router-dom';

import { EditNoteButtonIcon } from './components/EditNoteButtonIcon';

type Props = {
  contentId: number;
  noteId: number;
};

export const EditNoteButton: VFC<Props> = ({ contentId, noteId }) => {
  return ( 
    <Link to={`/content/${contentId}/updatenote/${noteId}`}>
      <EditNoteButtonIcon />
    </Link>
  );
};
