import { VFC } from 'react';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { main } from './style/main';
import { aside } from './style/aside';


import { ModefitedAt } from './components/ModefiedAt';
import { TagList } from './components/TagList';
import { DeleteNoteButton } from './components/DeleteNoteButton';
import { EditNoteButton } from './components/EditNoteButton';
import { Blocks } from './components/Blocks';
import { BodyOfNote } from './components/BodyOfNote';

import { NoteWithRelation } from '~/pages/type';

type Props = {
  note: NoteWithRelation;
};

export const Note: VFC<Props> = ({ note }) => {
  const { updatedAt, blocks, tags, transformed } = note;
  return (
    <div css={container}>
      <div css={main}>
        <ModefitedAt time={updatedAt} />
        <TagList tags={tags} />
        <BodyOfNote html={transformed} />
      </div>
      <div css={aside}>
        <ul css={buttons}>
          <li><EditNoteButton /></li>
          <li><DeleteNoteButton /></li>
        </ul>
        <Blocks blocks={blocks} />
      </div>
    </div>
  );
};
