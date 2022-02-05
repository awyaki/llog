import { VFC  } from 'react';

import { font } from '~/styleConfig';

import { 
  CommitIcon,
  SquareButton,
  EditIcon,
  NoteMaybeWithTitleAndButtons
} from '~/components';

import { NotFoundPage } from '~/pages';

import { usePreviewNote } from './hooks';

import 'zenn-content-css';

export const PreviewNote: VFC = () => {
  const  { note, contentName, onCommitLog, onClickEdit } = usePreviewNote();
  if (note === null) return <NotFoundPage />;

  const Buttons = [
            <SquareButton 
              Icon={CommitIcon}
              onClick={onCommitLog} />,
            <SquareButton 
              Icon={EditIcon}
              onClick={onClickEdit}/>
  ];

  const Note = NoteMaybeWithTitleAndButtons({ Buttons });
  

  return (
    <>
      <h1 css={{ 
        fontSize: font.size.L,
        marginBottom: '16px',
        }}>{contentName}</h1>
      <Note note={note} />
    </>
  );
};
