import { container } from './style/container';
import { Contents } from './pages/Contents';

export const App = () => {
  return (
    <div css={container}>
      <Contents />
    </div>
  );
};
