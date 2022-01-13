import { VFC } from 'react';

import { ContentWithRelation } from '~/pages/type';

import { list } from './style';

import { Link } from 'react-router-dom';

import { ContentCard } from './components';


type Props = {
  contents: ContentWithRelation[];
};

export const ContentsList: VFC<Props> = ({ contents }) => {
  return (
    <ul css={list}>
      {contents.map(({ id, name, createdAt, tags }) => <li key={id}>
                                        <Link to={`/content/${id}`}>
                                          <ContentCard 
                                            createdAt={createdAt}
                                            tags={tags}
                                            name={name} />
                                        </Link>
                                      </li>)}
    </ul>
  );
};

