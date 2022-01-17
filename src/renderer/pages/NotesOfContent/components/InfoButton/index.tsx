import { VFC } from 'react';

import { InfoIcon } from '~/components';

import { Link } from 'react-router-dom';

type Props = {
  id: number | undefined;
};

export const InfoButton: VFC<Props> = ({ id }) => {
  if (id === undefined) {
    return <InfoIcon size="large" />;
  }

  return (
    <Link to={`/content/${id}`}>
      <InfoIcon size="large" />
    </Link>
  );
};
