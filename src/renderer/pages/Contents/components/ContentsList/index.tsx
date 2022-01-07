import { VFC } from 'react';

import { Content } from '@prisma/client';

import { contentName, list } from './style';

import { Link } from 'react-router-dom';



type Props = {
  contents: Content[];
};

export const ContentsList: VFC<Props> = ({ contents }) => {
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

