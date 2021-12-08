import { FC } from 'react';
import { Content as SubContent } from './Content';
import { ContentContextProvider } from './ContentContextProvider';

export const Content: FC = () => {
  return (
    <ContentContextProvider>
      <SubContent />
    </ContentContextProvider>
  );
};
