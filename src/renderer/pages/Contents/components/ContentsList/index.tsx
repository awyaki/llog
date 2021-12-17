import { VFC } from 'react';

import { contentName } from './style';

import { Link } from 'react-router-dom';


import { useContentsList } from './hooks/useContentsList';

import { list } from './style/list';

export const ContentsList: VFC = () => {
  const contents = useContentsList();
  return (
    <ul css={list}>
      {contents.map(({ id, name }) => <li key={id}>
                                        <Link to={`/content/${id}`}>
                                          <h2 css={contentName}>{name}</h2>
                                        </Link>
                                      </li>)}
    </ul>
  );
};

