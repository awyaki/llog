import { VFC } from 'react';
import { useHistory } from 'react-router-dom';
import { container } from './style/container';
import { buttons } from './style/buttons';
import { titles } from './style/titles';
import { BackArrowIcon } from './BackArrowIcon';
import { ForwardArrowIcon } from './ForwardArrowIcon';

export const Header: VFC = () => {
  const history = useHistory();

  return (
    <header css={container}>
      <div css={buttons}>
        <button onClick={history.goBack}>
          <BackArrowIcon />
        </button>
        <ForwardArrowIcon />
      </div>
      <ul css={titles}>
        <li>Contents</li>
        <li>Timeline</li>
        <li>Reviews</li>
        <li>Notes</li>
        <li>Settings</li>
      </ul>
    </header>
  );
};
