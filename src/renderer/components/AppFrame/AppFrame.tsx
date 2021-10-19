import { FC } from 'react';
import { CSSObject } from '@emotion/react';
import Header from '../Header/Header';

type Props = {
  pageName?: string,
  css?: CSSObject;
};

const AppFrame: FC<Props> = ({ pageName, children, ...rest }) => {
  return (
    <div css={{ width: '100%', height: '100vh' }} {...rest}>
      <Header 
        pageName={pageName}
        css={{ marginBottom: '2rem' }}
      />
      <div css={{ width: '95%', height: '80vh', padding: '0 8%', overflowY: 'scroll', margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );
};

export default AppFrame;
