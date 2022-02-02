import { 
  VFC,
  useContext,
  ChangeEventHandler
  } from 'react';


import { 
  SelectedTagsList,
  AccordionButtonWithText,
  } from '~/components';

import {
  CollapseToSelectTags,
  SelectTagsContext
} from './components';


export * from './components';

export * from './hooks';

type Props = {
  searchQuery: string;
  onChangeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  isUpdate?: boolean;
};

export const SelectTags: VFC<Props> = ({ 
  searchQuery, 
  onChangeSearchQuery,
  isUpdate }) => {
  const { isOpen, toggleIsOpen } = useContext(SelectTagsContext);

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
        onChangeSearchQuery={onChangeSearchQuery}
        searchQuery={searchQuery} />
    </>
  );
};
