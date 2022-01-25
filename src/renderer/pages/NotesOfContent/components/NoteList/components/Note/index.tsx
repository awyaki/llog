import { VFC } from 'react';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { main } from './style/main';
import { aside } from './style/aside';

import {
  EditNoteButton,
} from '~/components';


import {
  ModefitedAt,
  TagList,
  Blocks,
  BodyOfNote,
  PreviewNoteButton
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
      <div css={aside}>
        <ul css={buttons}>
          <li><EditNoteButton secondary /></li>
          <li><PreviewNoteButton contentId={contentId} noteId={id} /></li>
        </ul>
      </div>
    </div>
  );
};
