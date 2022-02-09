import { 
  VFC,
  } from 'react';

import { SearchIcon } from '~/components';

import { CSSObject } from '@emotion/react';

import { colors, font } from '~/styleConfig';

import { 
  motion,
  Variants
  } from 'framer-motion';

import { Tag } from '@prisma/client';

import { useSearchTagsByName } from './hooks';

/**
 *
 *   ## Responsibility of `ControlTagSelectionWithSearch` components
 *
 *   - Show all tags collection which can be selected by the user.
 *   - Change the state of the tags that are selected or unselected by clicking each tag.
 *   - Show the state of tags selection; which tags are selected and the others are non-selected.
 *   - Search tags by tags name from user input.
 *
 *   ## Interface for developers (the `props` of `ControlTagSelectionWithSearch` and the returned value of view)
 *   - `css?: CSSObject` - For styling
 *   - `tags: Tag[]` - All tags may be selected by the user.
 *   - `selectedTags: Tag[]` - Tags are selected by the user.
 *   - `onSetSelectedTags: (tags: Tag[]) => void` - Set the value of `slectedTags` into the `tags` argument.
 *   - `onToggleSeletedTag: (tag:  Tag) => void` - Remove or append the tag. That is, if a passed `tag` exist on `selectedTags`, 
 *      the tag will be removed on `selectedTags` while, not exist, the tags is appended on `selectedTags`.
 *
 *   ## State of `ControlTagSelectionWithSearch`
 *   - `tagNameQuery: string` - For searching tags by name of tag.
 *   - `filteredTags: Tag[]` - Tags filtered by `tagNameQuery`. This state is always shown by the component as tags selection choice.
 * */





type ControlTagSelectionWithSearchProps = {
  css?: CSSObject;
  tags: Tag[];
  selectedTags: Tag[];
  onSelectedTags: (tags: Tag[]) => void;
  onToggleSelectedTags: (tag: Tag) => void;
};

type AllTagsProps = {
  css?: CSSObject;
  tags: Tag[];
  selectedTags: Tag[];
  onToggleSeletedTag?: (tag: Tag) => void;
};

type SelectedTagsProps = {
  css?: CSSObject;
  selectedTags: Tag[];
};

type SearchQueryInputBoxProps = {
  css?: CSSObject;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const tagVariants: Variants = {
  nonSelected: {
    color: colors.cyan.DEFAULT,
    backgroundColor: colors.white,
  },
  selected: {
    color: colors.white,
    backgroundColor: colors.cyan.DEFAULT,
  },
};

const AllTags: VFC<AllTagsProps> = ({
  tags,
  selectedTags,
  onToggleSeletedTag = () => {},
  ...rest
}) => {
  return (
    <ul 
      css={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        '> li': {
          marginRight: '4px',
          marginBottom: '4px',
        },
      }}
    {...rest}>
      {tags.map(({ id, name }) => {
        const isSelected = selectedTags.some((tag) => tag.id === id);
        return (
          <li key={id}>
            <motion.button
              variants={tagVariants}
              initial={isSelected ? 'selected' : 'nonSelected'}
              animate={isSelected ? 'selected' : 'nonSelected'} 
              onClick={() => onToggleSeletedTag({ id, name })}
              style={{
                minWidth: '80px',
                textAlign: 'center',
                fontSize: font.size.SS,
                borderRadius: '4px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: colors.cyan.DEFAULT,
                padding: '2px 4px',
              }}>
              {name}
            </motion.button>
          </li>
        );
      })}
    </ul>
  );
};


const SelectedTags: VFC<SelectedTagsProps> = ({
  selectedTags,
  ...rest
}) => {
  return (
    <ul 
      css={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        '> li': {
          marginRight: '4px',
          marginBottom: '4px',
        },
      }}
    {...rest}>
      {selectedTags.map(({ id, name }) => {
        return (
          <li key={id}
              css={{
                minWidth: '80px',
                textAlign: 'center',
                fontSize: font.size.SS,
                borderRadius: '4px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: colors.cyan.DEFAULT,
                color: colors.cyan.DEFAULT,
                padding: '2px 4px',
              }}>
              {name}
          </li>
        );
      })}
    </ul>
  );
};


const SearchQueryInputBox: VFC<SearchQueryInputBoxProps> = ({
  searchQuery,
  setSearchQuery,
  ...rest
}) => {
  return (
    <div css={{ 
      display: 'flex', 
      alignItems: 'flex-end', 
      marginBottom: '16px'
      }} {...rest}>
      <input 
        css={{ 
          width: '200px',
          borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
          marginRight: '4px'
          }}
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} />
      <SearchIcon />
    </div>
  );
};

export const ControlTagSelectionWithSearch: VFC<ControlTagSelectionWithSearchProps> = ({
  tags,
  selectedTags,
  onSelectedTags,
  onToggleSelectedTags,
  ...rest
}) => {
  const { 
    filteredTags,
    tagNameQuery,
    setTagNameQuery,
    } = useSearchTagsByName({ tags });


  return (
    <div {...rest}>
      <h2 css={{ marginBottom: '16px' }}>Tags</h2>
      <SelectedTags 
        css={{ marginBottom: '4px' }}
        selectedTags={selectedTags} />
      <SearchQueryInputBox 
        searchQuery={tagNameQuery}
        setSearchQuery={setTagNameQuery}
      />
      <AllTags 
        css={{
          padding: '16px',
          border: `1px solid ${colors.cyan.DEFAULT}`,
          borderRadius: '4px',
        }}
        tags={filteredTags}
        selectedTags={selectedTags}
        onToggleSeletedTag={onToggleSelectedTags}
      />
    </div>
  );
};
