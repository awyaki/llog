import { VFC, MouseEventHandler } from 'react';

import { 
  CommitIcon,
  NormalButtonAnimationWrapper
  } from '~/components';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const CommitButton: VFC<Props> = ({ onClick }) => {
  return (
    <NormalButtonAnimationWrapper onClick={onClick}>
      <CommitIcon />
    </NormalButtonAnimationWrapper>
  );
};
