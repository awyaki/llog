import { VFC, useCallback, useContext } from 'react';

import { getContent } from '~/api';

import { Link } from 'react-router-dom';

import { ContentContext } from '~/pages/ContentContextProvider';

import { ContentNameForm } from '~/components';

import { makeFormalDateString } from '~/utils';

import {
  TagsList,
  CreateNoteButton,
  NoteViewButton,
  BasicInfo,
  LevelRatio
} from './components';


import { container } from './style/container';
import { buttons } from './style/buttons';
import { title } from './style/title';


export const ContentDetails: VFC = () => {
  const { content, setContent } = useContext(ContentContext);

  if (content === null) return <></>;
  
  const onSubmitContentName = useCallback(async () => {
    const updatedContent = await getContent(content.id);
    setContent(updatedContent);
  }, [content, setContent]);

  return (
    <div css={container}>
      <h2 css={title}>{content.name}</h2>
      <ContentNameForm 
        id={content.id}
        onSubmit={onSubmitContentName}/>
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
