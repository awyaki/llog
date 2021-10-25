import { VFC } from 'react';

import { container } from './style/container';
import { buttons } from './style/buttons';
import { list } from './style/list';
import { CreateContentButton } from './components/CreateContentButton';
import { SearchContentsButton } from './components/SearchContentsButton';

import { pageTitle } from '~/pages/style/pageTitle';
export const ContentsList: VFC = () => {
  // stub data
  const contentsName = [
    { id: 1, name: 'コンパイラ 原理と構造' },
    { id: 2, name: 'アルゴリズムとデータ構造' },
    { id: 3, name: '恐れのない組織' },
    { id: 4, name: '数学教師のための問題集' },
    { id: 5, name: '日英語表現辞典' },
    { id: 6, name: '現代文解釈の基礎' },
    { id: 7, name: '独学大全' }
  ];

  return (
    <div css={container}>
      <h1 css={pageTitle}>Contents</h1>
      <div css={buttons}>
        <CreateContentButton active={true} />
        <SearchContentsButton active={true} />
      </div>
      <ul css={list}>
        {contentsName.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
};
