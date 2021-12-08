import { Content as SubContent } from './Content';
import { ContentContextProvider } from './ContentContextProvider';

export const Content = () => {
  return (
    <ContentContextProvider>
      <SubContent />
    </ContentContextProvider>
  );
};
