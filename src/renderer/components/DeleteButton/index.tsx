import { VFC } from 'react';

import { makeContainer } from './style';

type Props = {
  onClick: () => void;
  disabled: boolean;
};

export const DeleteButton: VFC<Props> = ({ onClick, disabled }) => {
  return (
    <button 
      css={makeContainer(disabled)}
      onClick={onClick} 
      disabled={disabled}>
      Delete
    </button>
  );
};
