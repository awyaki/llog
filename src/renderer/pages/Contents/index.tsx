import { VFC, useState } from 'react';
import { ContentsList } from './components/ContentsList';
import { Conditions } from './components/Conditions';
import { CreateNewContent } from './components/CreateNewContent';
import { container } from './style/container';

const rightView = {
  'Conditions': <Conditions />,
  'CreateNewContent': <CreateNewContent />
};

export const Contents: VFC = () => {
  const [mode, setMode] = useState<keyof typeof rightView>('CreateNewContent');

  return (
    <div css={container}>
      <ContentsList />
      {rightView[mode]}
    </div>
  );
};
