import { VFC, useContext } from 'react';
import { IsExpandModalProvider, IsExpandModalContext } from './components/IsExpandModalProvider';
import { Header } from './components/Header';
import { container } from './style/container';
import { NotesOfContent } from './pages/NotesOfContent';

export const App: VFC = () => {
  const { isExpandModal } = useContext(IsExpandModalContext);
  return (
    <IsExpandModalProvider>
      <div css={{ ...container, overflow: isExpandModal ? 'hidden' : 'visible' }}>
        <Header />
        <NotesOfContent />
      </div>
    </IsExpandModalProvider>
  );
};
