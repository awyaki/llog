import { VFC } from 'react';

import { ContentWithRelation } from '~/pages/type';

import { Link } from 'react-router-dom';

import { ContentCard } from './components';


type Props = {
  contents: ContentWithRelation[];
};

export const ContentsList: VFC<Props> = ({ contents }) => {
  return (
    <ul css={{
      minWidth: '400px',
      '> li': {
        marginBottom: '16px',
      },
      '> li:nth-last-of-type(1)': {
        marginBottom: 0,
      },
    }}>
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

