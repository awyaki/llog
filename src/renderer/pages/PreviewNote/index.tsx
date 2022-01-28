import { VFC  } from 'react';

import { 
  CommitIcon,
  NormalButtonAnimationWrapper,
  EditIcon,
} from '~/components';

import { NotFoundPage } from '~/pages';

import { makeFormalTimeString } from '~/utils';

import { TagList, BlockList } from './components';

import { Box } from '@chakra-ui/react';

import { pageTitle } from '~/pages/style';

import { usePreviewNote } from './hooks';

import { 
  noteStyle, 
  dateStyle,
  } from './style';

import 'zenn-content-css';

export const PreviewNote: VFC = () => {
  const  { note, contentName, onCommitLog, onClickEdit } = usePreviewNote();
  if (note === null) return <NotFoundPage />;

  const { updatedAt, tags, blocks, transformed } = note;

  return (
    <>
      <h2 css={{ ...pageTitle, marginBottom: '8px' }}>{contentName}</h2>
      <Box css={noteStyle}>
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
          <div css={dateStyle}>{makeFormalTimeString(updatedAt)}</div>
          <div css={{ display: 'flex' }}>
            <NormalButtonAnimationWrapper 
              onClick={onCommitLog}
              css={{ marginRight: '8px' }}>
              <CommitIcon />
            </NormalButtonAnimationWrapper>
            <NormalButtonAnimationWrapper onClick={onClickEdit}>
                <EditIcon />
            </NormalButtonAnimationWrapper>
          </div>
        </div>
        <TagList tags={tags} />
        <BlockList blocks={blocks} />
        <div className="znc" dangerouslySetInnerHTML={{ __html: transformed }}></div>
      </Box>
    </>
  );
};
