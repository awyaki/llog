import { VFC, MouseEventHandler } from 'react';
import { CreateNewContent as SubCreateNewContent } from './CreateNewContent'; 

import { SelectedTagsProvider } from './SelectedTagsContextProvider';
import { NameContextProvider } from './NameContextProvider';
import { BlockContextProvider } from './BlockContextProvider';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CreateNewContent: VFC<Props> = ({ onClick }) => {
  return (
    <SelectedTagsProvider>
      <NameContextProvider>
        <BlockContextProvider>
          <SubCreateNewContent onClick={onClick} />
        </BlockContextProvider>
      </NameContextProvider>
    </SelectedTagsProvider>
  );
};
