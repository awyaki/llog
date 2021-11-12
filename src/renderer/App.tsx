import { Header } from './components/Header';
import { container } from './style/container';
import { NotesOfContent } from './pages/NotesOfContent';

export const App = () => {
  return (
    <div css={container}>
      <Header />
      <NotesOfContent />
    </div>
  );
};
