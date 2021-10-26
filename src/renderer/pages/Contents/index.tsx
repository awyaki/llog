import { VFC } from 'react';
import { ContentsList } from './components/ContentsList';
import { Conditions } from './components/Conditions';
import { container } from './style/container';

export const Contents: VFC = () => {
  return (
    <div css={container}>
      <ContentsList />
      <Conditions />
    </div>
  );
};
