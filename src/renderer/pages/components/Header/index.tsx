import { VFC } from 'react';
import { container } from './style/container';
import { buttons } from './style/buttons';
import { BackArrowIcon } from './BackArrowIcon';
import { ForwardArrowIcon } from './ForwardArrowIcon';

export const Header: VFC = () => {
  return (
    <header css={container}>
      <div css={buttons}>
        <BackArrowIcon />
        <ForwardArrowIcon />
      </div>
      <ul>
        <li>Contents</li>
        <li>Timeline</li>
        <li>Reviews</li>
        <li>Notes</li>
        <li>Settings</li>
      </ul>
    </header>
  );
};
