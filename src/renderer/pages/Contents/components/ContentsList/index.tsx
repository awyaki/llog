import { VFC } from 'react';

import { useContentsList } from './hooks/useContentsList';

import { list } from './style/list';

export const ContentsList: VFC = () => {
  const contents = useContentsList();
  console.log('ContentsList', contents);
  return (
    <ul css={list}>
      {contents.map(({ id, name }) => <li key={id}>{name}</li>)}
    </ul>
  );
};

