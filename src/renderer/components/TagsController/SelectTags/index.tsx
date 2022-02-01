import { 
  VFC,
  useState,
  useCallback
  } from 'react';

import { colors } from '~/styleConfig';

import { Collapse } from '@chakra-ui/transition';


import { 
  SelectedTagsList,
  AccordionButtonWithText
  } from '~/components';

import {
  TagListToSelect,
  SearchAndCreateInput,
} from './components';

type Props = {
  isUpdate?: boolean;
};

export const SelectTags: VFC<Props> = ({ isUpdate }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <AccordionButtonWithText
        isOpen={isOpen}
        text={isUpdate ? "Update tags" : "Add tags"}
        onClick={toggleIsOpen}
        css={{ marginBottom: '16px' }}
      />
      <SelectedTagsList css={{ height: '23px', marginBottom: '8px' }} />
      <Collapse in={isOpen}>
        <div css={{
          padding: '16px',
          border: `1px solid ${colors.cyan.DEFAULT}`,
          borderRadius: '4px',
          marginBottom: '16px',
        }}>
          <h2 css={{ marginBottom: '8px' }}>Search or Create tags</h2>
          <SearchAndCreateInput />
          <TagListToSelect />
        </div>
      </Collapse>
    </>
  );
};
