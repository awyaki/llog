import { VFC, useCallback, useContext, useState } from 'react';

import { getContent } from '~/api';

import { Link } from 'react-router-dom';

import { ContentContext } from '~/pages/ContentContextProvider';

import { 
  ContentNameForm,
  EditIcon,
} from '~/components';

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

  const onSubmitContentName = useCallback(async () => {
    if (content === null) return;
    const updatedContent = await getContent(content.id);
    setContent(updatedContent);
  }, [content, setContent]);

  if (content === null) return <></>;
  return (
    <div css={container}>
        <div css={{ display: 'flex' }}>
          <h2 css={{ ...title, marginRight: '4px' }}>{content.name}</h2>
            <EditIcon />
        </div>
        <ContentNameForm 
          id={content.id}
          onSubmit={onSubmitContentName} />
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
