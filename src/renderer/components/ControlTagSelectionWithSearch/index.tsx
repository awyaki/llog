import { 
  VFC,
  useState,
  useCallback,
  useReducer,
  } from 'react';


import { Tag } from '@prisma/client';

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
  tags: Tag[];
  selectedTags: Tag[];
  onSelectedTags: (tags: Tag[]) => void;
  onToggleSelectedTags: (tag: Tag) => void;
};


const reducer = () => {

};

const useSearchTagsByName = () => {

};



export const ControlTagSelectionWithSearch: VFC<ControlTagSelectionWithSearchProps> = ({
  tags,
}) => {
  return (
    <>
    </>
  );
};
