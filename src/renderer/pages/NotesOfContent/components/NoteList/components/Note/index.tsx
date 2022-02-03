import { 
  VFC,
  } from 'react';

import { noteStyle } from '~/style';

import { Link } from 'react-router-dom';

import {
  EditIcon,
  PreviewNoteIcon,
  NormalButtonAnimationWrapper,
  NoteMaybeWithTitleAndButtons
} from '~/components';



import { NoteWithRelation } from '~/pages/type';

type Props = {
  note: NoteWithRelation;
};

export const Note: VFC<Props> = ({ note }) => {
  const { id, contentId } = note;
  
  const Buttons = [
          <Link to={`/content/${contentId}/updatenote/${id}`}>
            <NormalButtonAnimationWrapper>
              <EditIcon />
            </NormalButtonAnimationWrapper>
          </Link>,
          <Link to={`/content/${contentId}/previewnote/${id}`}>
            <NormalButtonAnimationWrapper>
              <PreviewNoteIcon />
            </NormalButtonAnimationWrapper>
          </Link>
          ];
  const Note = NoteMaybeWithTitleAndButtons({ Buttons });
  return (
    <div css={noteStyle}>
      <Note 
        isNested
        css={{ 
          maxHeight: '500px' ,
          overflowY: 'hidden', 
          }}
        note={note} />
    </div>);
};
