import { 
  VFC,
  useState,
  useCallback
  } from 'react';

import { colors } from '~/styleConfig';

import { Collapse } from '@chakra-ui/transition';


import { 
  SelectedTagsList,
  } from '~/components';

import {
  ExpandButton,
  TagListToSelect,
  SearchAndCreateInput,
} from './components';


export const SelectTags: VFC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ExpandButton 
        css={{
          marginBottom: '8px',
        }}
        onClick={toggleIsOpen} />
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
