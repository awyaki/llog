import { 
  VFC,
  useCallback
  } from 'react';

import { Link } from 'react-router-dom';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { main } from './style/main';
import { aside } from './style/aside';

import {
  EditNoteButton,
  EditIcon,
  PreviewNoteIcon,
  NormalButtonAnimationWrapper,
} from '~/components';


import {
  ModefitedAt,
  TagList,
  Blocks,
  BodyOfNote,
} from './components';

import { NoteWithRelation } from '~/pages/type';

type Props = {
  note: NoteWithRelation;
};

export const Note: VFC<Props> = ({ note }) => {
  const { id, updatedAt, blocks, tags, transformed, contentId } = note;
  
  return (
    <div css={container}>
      <div css={main}>
        <ModefitedAt time={updatedAt} />
        <TagList tags={tags} />
        <Blocks blocks={blocks} />
        <BodyOfNote html={transformed} />
      </div>
      <ul css={{
        display: 'flex',
      }}>
        <li css={{ marginRight: '4px' }}>
          <Link to={`/content/${contentId}/updatenote/${id}`}>
            <NormalButtonAnimationWrapper>
              <EditIcon />
            </NormalButtonAnimationWrapper>
          </Link>
        </li>
        <li>
          <Link to={`/content/${contentId}/previewnote/${id}`}>
            <NormalButtonAnimationWrapper>
              <PreviewNoteIcon />
            </NormalButtonAnimationWrapper>
          </Link>
        </li>
      </ul>
    </div>
  );
};
