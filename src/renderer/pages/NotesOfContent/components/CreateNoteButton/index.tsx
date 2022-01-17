import { VFC } from 'react';

import { EditNoteIcon } from '~/components';

import { Link } from 'react-router-dom';

type Props = {
  id: number | undefined;
};

export const CreateNoteButton: VFC<Props> = ({ id }) => {
  if (id === undefined) {
    return <EditNoteIcon size="large" />;
  }

  return (
    <Link to={`/content/${id}/createnote`}>
      <EditNoteIcon size="large" />
    </Link>
  );
};
