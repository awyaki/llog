import { VFC } from 'react';

import { Link } from 'react-router-dom';

import { Heading } from '@chakra-ui/react';

import { useContentsList } from './hooks/useContentsList';

import { list } from './style/list';

export const ContentsList: VFC = () => {
  const contents = useContentsList();
  return (
    <ul css={list}>
      {contents.map(({ id, name }) => <li key={id}>
                                        <Link to={`/content/${id}`}><Heading as="h2" variant="h2">{name}</Heading></Link>
                                      </li>)}
    </ul>
  );
};

