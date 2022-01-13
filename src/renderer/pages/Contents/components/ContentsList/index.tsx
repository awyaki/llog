import { VFC } from 'react';

import { Content } from '@prisma/client';

import { list } from './style';

import { Link } from 'react-router-dom';

import { ContentCard } from './components';


type Props = {
  contents: Content[];
};

export const ContentsList: VFC<Props> = ({ contents }) => {
  return (
    <ul css={list}>
      {contents.map(({ id, name, createdAt }) => <li key={id}>
                                        <Link to={`/content/${id}`}>
                                          <ContentCard 
                                            createdAt={createdAt}
                                            name={name} />
                                        </Link>
                                      </li>)}
    </ul>
  );
};

