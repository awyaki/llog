import { VFC } from 'react';

import { TagsList } from './components/TagsList';
import { CreateNoteButton } from './components/CreateNoteButton';
import { NoteViewButton } from './components/NoteViewButton';
import { BasicInfo } from './components/BasicInfo';
import { LevelRatio } from './components/LevelRatio';
import { DetailBlocksButton } from './components/DetailBlocksButton';
import { OverviewBlocksButton } from './components/OverviewBlocksButton';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { title } from './style/title';
import { blocksViewButtons } from './style/blocksViewButtons';

export const ContentDetails: VFC = () => {
  return (
    <div css={container}>
      <h2 css={title}>Content</h2>
      <TagsList />
      <ul css={buttons}>
        <li><CreateNoteButton /></li>
        <li><NoteViewButton /></li>
      </ul>
      <BasicInfo 
        created="2021/08/01 9：00"
        latest="2021/08/01 10：00"
        blocks={490}
        streak={10} />
      <LevelRatio />
      <ul css={blocksViewButtons}>
        <li><DetailBlocksButton active={true} /></li>
        <li><OverviewBlocksButton active={false} /></li>
      </ul>
    </div>
  );
};
