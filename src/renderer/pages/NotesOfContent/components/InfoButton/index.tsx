import { VFC } from 'react';

import { InfoButtonIcon } from './components/InfoButtonIcon';

import { Link } from 'react-router-dom';

type Props = {
  id: number | undefined;
};

export const InfoButton: VFC<Props> = ({ id }) => {
  if (id === undefined) {
    return <InfoButtonIcon />;
  }

  return (
    <Link to={`/content/${id}`}>
      <InfoButtonIcon />
    </Link>
  );
};
