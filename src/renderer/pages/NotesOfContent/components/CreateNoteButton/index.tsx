import { VFC } from 'react';

import { CreateNoteButtonIcon } from './components/CreateNoteButtonIcon';

import { Link } from 'react-router-dom';

type Props = {
  id: number | undefined;
};

export const CreateNoteButton: VFC<Props> = ({ id }) => {
  if (id === undefined) {
    return <CreateNoteButtonIcon />;
  }

  return (
    <Link to={`/content/${id}/createnote`}>
      <CreateNoteButtonIcon />
    </Link>
  );
};
