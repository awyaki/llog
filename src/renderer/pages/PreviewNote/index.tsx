import { VFC  } from 'react';

import { font } from '~/styleConfig';

import { 
  CommitIcon,
  SquareButton,
  EditIcon,
  NoteMaybeWithTitleAndButtons,
  ModalToSubmitLog,
} from '~/components';

import { NotFoundPage } from '~/pages';

import { usePreviewNote } from './hooks';

import 'zenn-content-css';

export const PreviewNote: VFC = () => {
  const  { 
    isOpen,
    onOpenModal,
    onCloseModal,
    note, 
    contentName, 
    onSubmitLog,
    onClickEdit } = usePreviewNote();

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
      <Note note={note} />
    </>
  );
};
