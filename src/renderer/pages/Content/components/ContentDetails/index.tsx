import { VFC } from 'react';

import { Link } from 'react-router-dom';

import { ContentWithRelation } from '~/pages/type';

import { ContentNameForm } from '~/components';

import { makeFormalDateString } from '~/utils';

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


export const ContentDetails: VFC<Props> = ({ content }) => {
  if (content === null) return <></>;

  return (
    <div css={container}>
      <h2 css={title}>{content.name}</h2>
      <ContentNameForm id={content.id} />
      <TagsList tags={content.tags} />
      <ul css={buttons}>
        <li><Link to={`/content/${content.id}/createnote`}><CreateNoteButton /></Link></li>
        <li><Link to={`/content/${content.id}/notes`}><NoteViewButton /></Link></li>
      </ul>
      <BasicInfo 
        created={makeFormalDateString(content.createdAt)}
        blocks={content.blocks.length} />
      <LevelRatio blocks={content.blocks} />
    </div>
  );
};
