import { Header } from './components/Header';
import { container } from './style/container';
import { Content } from './pages/Content';

export const App = () => {
  return (
    <div css={container}>
      <Header />
      <Content />
    </div>
  );
};
