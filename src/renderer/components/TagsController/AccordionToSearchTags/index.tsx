import { 
  VFC,
  useContext
} from 'react';

import {
  colors,
  font
} from '~/styleConfig';

import { CSSObject } from '@emotion/react';

import {
  SearchIcon,
  SelectedTagsContext
} from '~/components';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box
} from '@chakra-ui/react';



const tagStyle: CSSObject = {
  minWidth: '80px',
  textAlign: 'center',
  fontSize: font.size.SS,
  borderRadius: '4px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.white,
  color: colors.cyan.DEFAULT,
  padding: '2px 4px',
  transition: '.25s',
};



const reverseTagStyle: CSSObject = {
  ...tagStyle,
  borderColor: colors.white,
  backgroundColor: colors.cyan.DEFAULT,
  color: colors.white,
};


export const AccordionToSearchTags: VFC = () => {
  const {
    filteredTags,
    onToggleSearchedTags,
    searchedTags,
    searchQuery,
    setSearchQueryAction,
  } = useContext(SelectedTagsContext);
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Search by Tags
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
            <div css={{ display: 'flex', alignItems: 'flex-end', marginBottom: '16px' }}>
              <input
                css={{ 
                  width: '200px',
                  borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
                  }}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQueryAction(e.target.value)}
              />
              <SearchIcon />
            </div>
            <ul css={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              '> li': {
                marginRight: '4px',
                marginBottom: '4px',
              },
            }}>
            {filteredTags.map(({ id, name }) => <li key={id}>
                                          <button 
                                            onClick={onToggleSearchedTags({ id, name })}
                                            css={searchedTags.some((tag) => tag.id === id) ? reverseTagStyle : tagStyle}
                                          >{name}</button>
                                          </li>)}
            </ul>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
