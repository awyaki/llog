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

import { Note as SNote } from '~/stub/types';

type Props = {
  note: SNote;
};

export const Note: VFC<Props> = ({ note }) => {
  const { modefiedAt, blocks, tags, html } = note;
  return (
    <div css={container}>
      <div css={main}>
        <ModefitedAt time={modefiedAt} />
        <TagList tags={tags} />
        <BodyOfNote html={html} />
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
