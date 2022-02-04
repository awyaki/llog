import { 
  VFC,
  useContext,
  Dispatch,
  SetStateAction,
  ChangeEventHandler
  } from 'react';


import { 
  SelectedTagsList,
  AccordionButtonWithText,
  SelectedTagsContext
  } from '~/components';

import {
  CollapseToSelectTags,
  SelectTagsContext,
} from './components';


export * from './components';

export * from './hooks';

type Props = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  onChangeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  isUpdate?: boolean;
};

export const SelectTags: VFC<Props> = ({ 
  searchQuery, 
  setSearchQuery,
  onChangeSearchQuery,
  isUpdate }) => {
  const { isOpen, toggleIsOpen } = useContext(SelectTagsContext);
  const { selectedTags } = useContext(SelectedTagsContext);
  return (
    <>
      <AccordionButtonWithText
        isOpen={isOpen}
        text={isUpdate ? "Update tags" : "Add tags"}
        onClick={toggleIsOpen}
        css={{ marginBottom: '16px' }}
      />
      <SelectedTagsList css={{ height: '23px', marginBottom: '8px' }} />
      <CollapseToSelectTags 
        selectedTags={selectedTags}
        setSearchQuery={setSearchQuery}
        onChangeSearchQuery={onChangeSearchQuery}
        searchQuery={searchQuery} />
    </>
  );
};
