import { VFC, MouseEventHandler } from 'react';

import { Mode } from '../../../../types';

import { PreviewButtonIcon } from './components/PreviewButtonIcon';

type Props = {
  mode: Mode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const PreviewButton: VFC<Props> = ({ mode, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={mode === 'preview'}>
      <PreviewButtonIcon isActive={mode !== 'preview'} />
    </button>

  );
};
