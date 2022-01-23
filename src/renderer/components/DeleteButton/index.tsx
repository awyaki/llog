import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { makeContainer } from './style';

type Props = {
  onClick: () => void;
  disabled: boolean;
  css: CSSObject;
};

export const DeleteButton: VFC<Props> = ({ onClick, disabled, ...rest }) => {
  return (
    <button 
      css={{ ...makeContainer(disabled), ...rest }}
      onClick={onClick} 
      disabled={disabled}>
      Delete
    </button>
  );
};
