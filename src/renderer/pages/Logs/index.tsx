import { VFC } from 'react';

import { Box } from '@chakra-ui/react';
import { container } from './style';

import { Header } from './components';

import { NoteWithContentName } from '~/components';

export const Logs: VFC = () => {
  return (
    <>
      <Header />
      <Box css={container}>
      <NoteWithContentName 
        contentName="コンパイラ原理と構造"
        tags={[{ id: 1, name: 'computer', }, { id: 2, name: 'compiler' }]}
        blocks={[{ id: 1, unitNumber: 1, level: 1 }, { id: 2, unitNumber: 2, level: 2 }, { id: 3, unitNumber: 3, level: 3 }]}
        html="<h1>Hello World</h1>"
        updatedAt="2021/7/30 9:00" />
      </Box>
    </>
  );
};
