import { VFC } from 'react';

import { CSSObject } from '@emotion/react';


import { Mode } from '../../types';

import { Box, VStack } from '@chakra-ui/react';

import {
  SelectedTagsList
} from '~/components';

import { 
  SaveButton,
  CommitButton,
  OneMoreNoteButton,
  SelectedBlocks,
  SwitchEdit,
  } from './components';

import { title } from './style';

type Props = {
  css?: CSSObject;
  mode: Mode;
  toggleEditBeteewnPreview: () => void;
  onOpenSelectBlocks: () => void;
  isNoteChange: boolean;
  isNoteExist: boolean;
  onCreateNote: () => void;
  onUpdateNote: () => void;
  onCommitLog: () => void;
  onMoveToOtherNoteEdit: () => void;
};

export const ControlBox: VFC<Props> = ({ 
  mode, 
  toggleEditBeteewnPreview,
  onOpenSelectBlocks,
  isNoteChange,
  isNoteExist,
  onCreateNote,
  onUpdateNote,
  onCommitLog,
  onMoveToOtherNoteEdit,
  ...rest
  }) => {
  return (
      <div css={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        }} {...rest}>
        <SelectedTagsList css={{ marginBottom: '16px' }} />
        <SelectedBlocks 
          css={{ marginBottom: '16px' }}
          onOpenSelectBlocks={onOpenSelectBlocks} />
        <SwitchEdit
          css={{ marginBottom: '8px' }}
          isEdit={mode === 'edit'}
          onClick={toggleEditBeteewnPreview}/>
        <CommitButton 
          css={{ marginBottom: '8px' }}
          onClick={onCommitLog}/>
        <SaveButton 
          css={{ marginBottom: '8px' }}
          onClick={isNoteExist ? onUpdateNote : onCreateNote} 
          disabled={!isNoteChange} />
        <OneMoreNoteButton
          disabled={isNoteChange || !isNoteExist}
          onClick={onMoveToOtherNoteEdit} />
      </div>
  );
};
