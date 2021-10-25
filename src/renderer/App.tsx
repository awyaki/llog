import { Header } from './components/Header';
import { container } from './style/container';
import { Contents } from './pages/Contents';

export const App = () => {
  return (
    <div css={container}>
      <Header />
      <Contents />
    </div>
  );
};
