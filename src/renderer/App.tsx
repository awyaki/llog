import { VFC, useContext } from 'react';
import { IsExpandModalContext } from './components/IsExpandModalProvider';
import { Header } from './components/Header';
import { container } from './style/container';
import { NotesOfContent } from './pages/NotesOfContent';

export const App: VFC = () => {
  const { isExpandModal } = useContext(IsExpandModalContext);
  return (
    <div css={{ ...container, overflow: isExpandModal ? 'hidden' : 'visible' }}>
      <Header />
      <NotesOfContent />
    </div>
  );
};
