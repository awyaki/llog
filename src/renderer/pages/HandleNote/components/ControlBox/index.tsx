import { VFC } from 'react';

import { CSSObject } from '@emotion/react';


import { Mode } from '../../types';

import {
  SelectedTagsList,
  ExpandButton as ExpandAddTagsButton
} from '~/components';

import { 
  SaveButton,
  CommitButton,
  OneMoreNoteButton,
  SelectedBlocks,
  SwitchEdit,
  NoteStateIndicator,
  } from './components';

import { ExpandAllBlocksButton } from '../SelectBlocks';


type Props = {
  css?: CSSObject;
  mode: Mode;
  updatedAt: Date | undefined; 
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
  updatedAt,
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
        minWidth: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        }} {...rest}>
        <NoteStateIndicator 
          css={{ marginBottom: '16px' }}
          isNoteExist={isNoteExist}
          isNoteChange={isNoteChange}
          updatedAt={updatedAt} />
        <ExpandAddTagsButton css={{ marginBottom: '8px' }} />
        <SelectedTagsList css={{ marginBottom: '16px' }} />
        <ExpandAllBlocksButton />
        <SelectedBlocks 
          css={{ marginBottom: '16px' }}
          onOpenSelectBlocks={onOpenSelectBlocks} />
        <SwitchEdit
          css={{ marginBottom: '16px' }}
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
