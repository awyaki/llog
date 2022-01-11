import { VFC } from 'react';

import { Link } from 'react-router-dom';

import { ContentWithRelation } from '~/pages/type';

import { dateToString } from '~/utils';

import { TagsList } from './components/TagsList';
import { CreateNoteButton } from './components/CreateNoteButton';
import { NoteViewButton } from './components/NoteViewButton';
import { BasicInfo } from './components/BasicInfo';
import { LevelRatio } from './components/LevelRatio';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { title } from './style/title';

type Props = {
  content: ContentWithRelation | null;
};

const makeLatestString = (content: ContentWithRelation | null) => {
  if (content == null) return 'No data';
  if (content.commitedAt == null) return 'No commits for this content.';
  return dateToString(content.commitedAt);
};

export const ContentDetails: VFC<Props> = ({ content }) => {

  return (
    <div css={container}>
      <h2 css={title}>{content?.name ?? ''}</h2>
      <TagsList tags={content?.tags ?? []} />
      <ul css={buttons}>
        <li><Link to={ content !== null ? `/content/${content.id}/createnote` : ''}><CreateNoteButton /></Link></li>
        <li><Link to={ content !== null ? `/content/${content.id}/notes` : ''}><NoteViewButton /></Link></li>
      </ul>
      <BasicInfo 
        created={content !== null ? dateToString(content.createdAt) : 'No data'}
        blocks={content !== null ? content.blocks.length : 0} />
      <LevelRatio blocks={content?.blocks ?? []} />
    </div>
  );
};
