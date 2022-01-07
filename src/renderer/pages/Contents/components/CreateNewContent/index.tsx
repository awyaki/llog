import { VFC, MouseEventHandler } from 'react';
import { CreateNewContent as SubCreateNewContent } from './CreateNewContent'; 

import { SelectedTagsProvider } from './SelectedTagsContextProvider';
import { NameContextProvider } from './NameContextProvider';
import { BlockContextProvider } from './BlockContextProvider';

type Props = {
  onOpenTagCreateModal: MouseEventHandler<HTMLButtonElement>;
  onCreateNewContent: MouseEventHandler<HTMLButtonElement>;
};

export const CreateNewContent: VFC<Props> = ({ onOpenTagCreateModal, onCreateNewContent }) => {
  return (
    <SelectedTagsProvider>
      <NameContextProvider>
        <BlockContextProvider>
          <SubCreateNewContent onOpenTagCreateModal={onOpenTagCreateModal} onCreateNewContent={onCreateNewContent} />
        </BlockContextProvider>
      </NameContextProvider>
    </SelectedTagsProvider>
  );
};
