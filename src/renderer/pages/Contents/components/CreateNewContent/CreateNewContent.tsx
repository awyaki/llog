import { VFC, MouseEventHandler } from 'react';
import { container } from './style/container';


import { pageTitle } from '~/pages/style/pageTitle';


type Props = {
  onOpenTagCreateModal: MouseEventHandler<HTMLButtonElement>;
  onCreateNewContent: MouseEventHandler<HTMLButtonElement>;
};

export const CreateNewContent: VFC<Props> = ({ onOpenTagCreateModal, onCreateNewContent }) => {

  return (
    <div css={container}>
      <h2 css={pageTitle}>Create New Content</h2>
    </div>
  );
};
