import { 
  VFC,
  } from 'react';


import { 
  SelectedTagsList,
  AccordionButtonWithText,
  } from '~/components';

import {
  CollapseToSelectTags,
} from './components';

import { useSelectTags } from './hooks';

export * from './components';

export * from './hooks';

type Props = {
  isUpdate?: boolean;
};

export const SelectTags: VFC<Props> = ({ isUpdate }) => {
  const { isOpen, toggleIsOpen } = useSelectTags();

  return (
    <>
      <AccordionButtonWithText
        isOpen={isOpen}
        text={isUpdate ? "Update tags" : "Add tags"}
        onClick={toggleIsOpen}
        css={{ marginBottom: '16px' }}
      />
      <SelectedTagsList css={{ height: '23px', marginBottom: '8px' }} />
      <CollapseToSelectTags isOpen={isOpen} />
    </>
  );
};
