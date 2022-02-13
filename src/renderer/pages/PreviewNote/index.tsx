import { VFC  } from 'react';

import { font, colors } from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import { 
  CommitIcon,
  SquareButton,
  EditIcon,
  NoteMaybeWithTitleAndButtons,
  ModalToSubmitLog,
} from '~/components';

import { NotFoundPage } from '~/pages';

import { usePreviewNote } from './hooks';

import { 
  Switch, 
  DisabableNormalButton
  } from '~/components';

import 'zenn-content-css';



type DeleteNoteButtonWithLimitationProps = {
  css?: CSSObject;
  onDeleteNote: () => void;
  isDisable: boolean;
  onToggleIsDisable: () => void;
};

const DeleteNoteButtonWithLimitation: VFC<DeleteNoteButtonWithLimitationProps> = ({
  onDeleteNote,
  isDisable,
  onToggleIsDisable,
  ...rest
}) => {
  return (
    <div css={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }} {...rest}>
      <DisabableNormalButton
        css={{ marginRight: '8px' }}
        colorOptions={{
          primary: colors.red.DEFAULT,
          secondary: colors.white
        }}
        text="Delete"
        isDisable={isDisable}
        onClick={onDeleteNote} />
      <Switch 
        color={colors.red.DEFAULT}
        isOn={!isDisable} 
        onClick={onToggleIsDisable} />
    </div>
  );
};

export const PreviewNote: VFC = () => {
  const  { 
    isOpen,
    onOpenModal,
    onCloseModal,
    note, 
    contentName, 
    onSubmitLog,
    onClickEdit,
    isDisableDeleteButton,
    onDeleteNote,
    onToggleIsDisableDeleteButton,
    } = usePreviewNote();

  if (note === null) return <NotFoundPage />;

  const Buttons = [
            <SquareButton 
              Icon={CommitIcon}
              onClick={onOpenModal} />,
            <SquareButton 
              Icon={EditIcon}
              onClick={onClickEdit}/>
  ];

  const Note = NoteMaybeWithTitleAndButtons({ Buttons });
  

  return (
    <>
      <ModalToSubmitLog
        isOpen={isOpen}
        onClose={onCloseModal}
        onSubmitLog={onSubmitLog}
      />
      <h1 css={{ 
        fontSize: font.size.L,
        marginBottom: '16px',
        }}>{contentName}</h1>
      <DeleteNoteButtonWithLimitation 
        css={{ marginBottom: '16px' }}
        isDisable={isDisableDeleteButton}
        onDeleteNote={onDeleteNote}
        onToggleIsDisable={onToggleIsDisableDeleteButton}
      />
      <Note note={note} />
    </>
  );
};
