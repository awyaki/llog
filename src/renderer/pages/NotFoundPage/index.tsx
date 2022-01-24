import { VFC } from 'react';

import { Menu } from '~/components';

import { container } from '~/pages/style';

export const NotFoundPage: VFC = () => {
  return (
    <div css={{ display: 'flex' }}>
      <Menu />
      <div css={container}>
        <h1>Page is Not Found</h1>
      </div>
    </div>
  );
};
