import { 
  VFC,
  } from 'react';

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
    <div css={{
        minHeight: '500px',
        padding: '40px',
        boxShadow: '0px 0px 80px -26px rgba(0, 0, 0, 0.5)',
        borderRadius: '25px',
    }}>
      <Note 
        css={{ 
          maxHeight: '500px' ,
          overflowY: 'hidden', 
          padding: '10px',
          boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
          borderRadius: 0,
          }}
        note={note} />
    </div>);
};
