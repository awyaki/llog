import { VFC, useCallback, useContext, useState } from 'react';

import { CSSObject } from '@emotion/react';

import { Switch } from '@chakra-ui/react';

import { useHistory } from 'react-router-dom';

import { getContent, deleteContent } from '~/api';

import { Link } from 'react-router-dom';

import { 
  ContentContext,
  ContentNameForm,
  EditIcon,
  DeleteButton,
  NotifierContext
} from '~/components';

import { makeFormalTimeString } from '~/utils';

import {
  CreateNoteButton,
  BasicInfo,
  LevelRatio
} from './components';


import { buttons } from './style/buttons';
import { title } from './style/title';

type Props = {
  css?: CSSObject;
};


export const ContentDetails: VFC<Props> = ({  ...rest }) => {
  const [isUpdateNameMode, setIsUpdateNameMode] = useState(false);
  const [isAllowDelete, setIsAllowDelete] = useState(false);
  const { content, setContent } = useContext(ContentContext);
  const history = useHistory();
  const { setMessage } = useContext(NotifierContext);
  
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

  const onDeleteContent = useCallback(async () => {
    if (content === null) return;
    setMessage('The Content is deleted!');
    history.push('/');
    await deleteContent(content.id);
  }, [content]); 

  if (content === null) return <></>;
  return (
    <div {...rest}>
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
      </ul>
      <BasicInfo 
        id={content.id}
        created={makeFormalTimeString(content.createdAt)}
        blocks={content.blocks.length} />
      <LevelRatio blocks={content.blocks} />
      <DeleteButton 
        css={{ marginRight: '16px' }}
        onClick={onDeleteContent} 
        disabled={!isAllowDelete} />
      <Switch 
        isChecked={isAllowDelete}
        onChange={onToggleToAllowDelete} />
    </div>
  );
};
