import { VFC } from 'react';

import { Header } from '../Header';

import { container } from '~/pages/style';

export const NotFoundPage: VFC = () => {
  return (
    <>
      <Header />
      <div css={container}>
        <h1>Page is Not Found</h1>
      </div>
    </>
  );
};
