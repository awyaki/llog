import { VFC  } from 'react';

import { Link } from 'react-router-dom';

import { Header } from '../Header';

import { 
  InfoIcon,
  EditNoteIcon,
  NotesIcon,
  CommitIcon,
} from '~/components';

import { makeFormalTimeString } from '~/utils';

import { TagList, BlockList } from './components';

import { Box } from '@chakra-ui/react';

import { container, pageTitle } from '~/pages/style';

import { usePreviewNote } from './hooks';

import { 
  noteStyle, 
  dateStyle,
  buttonsStyle
  } from './style';

import 'zenn-content-css';

export const PreviewNote: VFC = () => {
  const  { note, contentName, onCommitLog } = usePreviewNote();
  if (note === null) return <></>;

  const { contentId, id, updatedAt, tags, blocks, transformed } = note;
  return (
    <>
      <Header />
      <Box css={container}>
        <h2 css={pageTitle}>{contentName}</h2>
        <ul css={buttonsStyle}>
          <li><Link to={`/content/${contentId}`}><InfoIcon size="large" /></Link></li>
          <li><Link to={`/content/${contentId}/updatenote/${id}`}><EditNoteIcon size="large" /></Link></li>
          <li><Link to={`content/${contentId}/notes`}><NotesIcon size="large"/></Link></li>
        </ul>
        <Box css={noteStyle}>
          <div css={dateStyle}>{makeFormalTimeString(updatedAt)}</div>
          <button onClick={onCommitLog}><CommitIcon size="small" /></button>
          <TagList tags={tags} />
          <BlockList blocks={blocks} />
          <div className="znc" dangerouslySetInnerHTML={{ __html: transformed }}></div>
        </Box>
      </Box>
    </>
  );
};
