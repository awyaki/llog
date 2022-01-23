import { VFC, useCallback, useContext, useState } from 'react';

import { Switch } from '@chakra-ui/react';

import { getContent } from '~/api';

import { Link } from 'react-router-dom';

import { 
  ContentContext,
  ContentNameForm,
  EditIcon,
  DeleteButton,
} from '~/components';

import { makeFormalDateString } from '~/utils';

import {
  CreateNoteButton,
  NoteViewButton,
  BasicInfo,
  LevelRatio
} from './components';


import { container } from './style/container';
import { buttons } from './style/buttons';
import { title } from './style/title';


export const ContentDetails: VFC = () => {
  const [isUpdateNameMode, setIsUpdateNameMode] = useState(false);
  const [isAllowDelete, setIsAllowDelete] = useState(false);
  const { content, setContent } = useContext(ContentContext);
  
  const onChangeToNameUpdate = useCallback(() => {
    setIsUpdateNameMode(true);
  }, [setIsUpdateNameMode]);

  const onSubmitContentName = useCallback(async () => {
    if (content === null) return;
    const updatedContent = await getContent(content.id);
    setIsUpdateNameMode(false);
    setContent(updatedContent);
  }, [content, setContent]);

  const onChangeToNormal = useCallback(() => {
    setIsUpdateNameMode(false);
  }, [setIsUpdateNameMode]);

  const onToggleToAllowDelete = useCallback(() => {
    setIsAllowDelete((prev) => !prev);
  }, []);

  if (content === null) return <></>;
  return (
    <div css={container}>
        {isUpdateNameMode
          ?   <ContentNameForm 
                  id={content.id}
                  defaultName={content.name}
                  onSubmit={onSubmitContentName}
                  onClose={onChangeToNormal}
                  />
          : <div css={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
              <h2 css={{ ...title, marginRight: '8px' }}>{content.name}</h2>
              <button css={{ marginTop: '3px' }} onClick={onChangeToNameUpdate}><EditIcon /></button>
            </div>}
      <ul css={buttons}>
        <li><Link to={`/content/${content.id}/createnote`}><CreateNoteButton /></Link></li>
        <li><Link to={`/content/${content.id}/notes`}><NoteViewButton /></Link></li>
      </ul>
      <BasicInfo 
        id={content.id}
        created={makeFormalDateString(content.createdAt)}
        blocks={content.blocks.length} />
      <LevelRatio blocks={content.blocks} />
      <DeleteButton 
        css={{ marginRight: '16px' }}
        onClick={() => {}} 
        disabled={!isAllowDelete} />
      <Switch 
        isChecked={isAllowDelete}
        onChange={onToggleToAllowDelete} />
    </div>
  );
};
