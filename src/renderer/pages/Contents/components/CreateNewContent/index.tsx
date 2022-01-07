import { VFC, MouseEventHandler, ComponentProps } from 'react';

import { Tag } from '@prisma/client';

import { CreateNewContent as SubCreateNewContent } from './CreateNewContent'; 

import { SelectedTagsProvider } from './SelectedTagsContextProvider';
import { NameContextProvider } from './NameContextProvider';
import { BlockContextProvider } from './BlockContextProvider';



type Props = ComponentProps<typeof SubCreateNewContent>;

export const CreateNewContent: VFC<Props> = ({ 
  contents,
  onOpenTagCreateModal,
  onCreateNewContent
}) => {
  return (
    <SelectedTagsProvider>
      <NameContextProvider>
        <BlockContextProvider>
          <SubCreateNewContent 
            contents={contents}
            onOpenTagCreateModal={onOpenTagCreateModal} 
            onCreateNewContent={onCreateNewContent} />
        </BlockContextProvider>
      </NameContextProvider>
    </SelectedTagsProvider>
  );
};
