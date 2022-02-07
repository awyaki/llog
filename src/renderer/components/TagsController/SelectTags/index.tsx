import { 
  VFC,
  Dispatch,
  SetStateAction,
  ChangeEventHandler
  } from 'react';

import { Tag } from '@prisma/client';

import { 
  SelectedTagsList,
  AccordionButtonWithText,
  } from '~/components';

import {
  CollapseToSelectTags,
} from './components';


export * from './components';

export * from './hooks';

type Props = {
  isOpen: boolean,
  toggleIsOpen: () => void;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  onChangeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  selectedTags: Tag[];
  onToggleSelectedTags: (tag: Tag) => void;
  setSelectedTags: Dispatch<SetStateAction<Tag[]>>;
  isUpdate?: boolean;
};

export const SelectTags: VFC<Props> = ({ 
  isOpen,
  toggleIsOpen,
  searchQuery, 
  setSearchQuery,
  onChangeSearchQuery,
  selectedTags,
  onToggleSelectedTags,
  setSelectedTags,
  isUpdate
  }) => {
  
  console.log('SelectTags', isOpen);
  return (
    <>
      <AccordionButtonWithText
        isOpen={isOpen}
        text={isUpdate ? "Update tags" : "Add tags"}
        onClick={toggleIsOpen}
        css={{ marginBottom: '16px' }}
      />
      <SelectedTagsList css={{ marginBottom: '8px' }} />
      <CollapseToSelectTags 
        isOpen={isOpen}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        onToggleSelectedTags={onToggleSelectedTags}
        setSearchQuery={setSearchQuery}
        onChangeSearchQuery={onChangeSearchQuery}
        searchQuery={searchQuery} />
    </>
  );
};
