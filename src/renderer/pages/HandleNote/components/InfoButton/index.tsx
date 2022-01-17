import { VFC, MouseEventHandler } from 'react';

import { InfoIcon } from '~/components'; 

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const InfoButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <InfoIcon size="large" />
    </button>
  );
};

