import { VFC } from 'react';

import { PreviewNoteIcon } from '~/components';

import { Link } from 'react-router-dom';

type Props = {
  contentId: number;
  noteId: number;
};

export const PreviewNoteButton: VFC<Props> = ({ contentId, noteId }) => {
  return (
    <Link to={`/content/${contentId}/previewnote/${noteId}`}>
      <PreviewNoteIcon />
    </Link>
  );
};
