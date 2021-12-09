import { VFC, Dispatch, SetStateAction } from 'react';

import { ContentWithRelation } from '~/pages/type';

import { dateToString } from '~/utils';

import { TagsList } from './components/TagsList';
import { CreateNoteButton } from './components/CreateNoteButton';
import { NoteViewButton } from './components/NoteViewButton';
import { BasicInfo } from './components/BasicInfo';
import { LevelRatio } from './components/LevelRatio';
import { DetailViewBlocksButton } from './components/DetailViewBlocksButton';
import { OverviewBlocksButton } from './components/OverviewBlocksButton';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { title } from './style/title';
import { blocksViewButtons } from './style/blocksViewButtons';

type Props = {
  mode: 'detailview' | 'overview';
  setMode: Dispatch<SetStateAction<'detailview' | 'overview'>>; 
  content: ContentWithRelation | null;
};

const makeLatestString = (content: ContentWithRelation | null) => {
  if (content == null) return 'No data';
  if (content.commitedAt == null) return 'No commits for this content.';
  return dateToString(content.commitedAt);
};

export const ContentDetails: VFC<Props> = ({ mode, setMode, content }) => {

  const handleSetDetailviewMode = () => {
    setMode('detailview');
  };

  const handleSetOverviewMode = () => {
    setMode('overview');
  };

  return (
    <div css={container}>
      <h2 css={title}>Content</h2>
      <TagsList />
      <ul css={buttons}>
        <li><CreateNoteButton /></li>
        <li><NoteViewButton /></li>
      </ul>
      <BasicInfo 
        created={content !== null ? dateToString(content.createdAt) : 'No data'}
        latest={makeLatestString(content)}
        blocks={content !== null ? content.blocks.length : 0}
        streak={10} />
      <LevelRatio />
      <ul css={blocksViewButtons}>
        <li>
          <OverviewBlocksButton 
            active={mode === 'overview'}
            onClick={handleSetOverviewMode}
          />
        </li>
        <li>
          <DetailViewBlocksButton 
            active={mode === 'detailview'} 
            onClick={handleSetDetailviewMode} />
        </li>
      </ul>
    </div>
  );
};
