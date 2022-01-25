import { VFC  } from 'react';

import { Link } from 'react-router-dom';

import { 
  EditNoteIcon,
  CommitIcon,
  Menu
} from '~/components';

import { NotFoundPage } from '~/pages';

import { makeFormalTimeString } from '~/utils';

import { TagList, BlockList } from './components';

import { Box } from '@chakra-ui/react';

import { container, pageTitle } from '~/pages/style';

import { usePreviewNote } from './hooks';

import { 
  noteStyle, 
  dateStyle,
  } from './style';

import 'zenn-content-css';

export const PreviewNote: VFC = () => {
  const  { note, contentName, onCommitLog } = usePreviewNote();
  if (note === null) return <NotFoundPage />;

  const { contentId, id, updatedAt, tags, blocks, transformed } = note;
  return (
    <div css={{ display: 'flex' }}>
      <Menu />
      <Box css={container}>
        <h2 css={{ ...pageTitle, marginBottom: '8px' }}>{contentName}</h2>
        <Box css={noteStyle}>
          <div css={{ display: 'flex', justifyContent: 'space-between' }}>
            <div css={dateStyle}>{makeFormalTimeString(updatedAt)}</div>
            <div css={{ display: 'flex' }}>
              <button css={{ marginRight: '8px' }}onClick={onCommitLog}><CommitIcon size="small" /></button>
              <Link to={`/content/${contentId}/updatenote/${id}`}><EditNoteIcon size="small" /></Link>
            </div>
          </div>
          <TagList tags={tags} />
          <BlockList blocks={blocks} />
          <div className="znc" dangerouslySetInnerHTML={{ __html: transformed }}></div>
        </Box>
      </Box>
    </div>
  );
};
