import { 
  useEffect, 
  useCallback,
  ChangeEventHandler,
  useContext,
} from 'react';

import { useDisclosure } from '@chakra-ui/react';

import { 
  SelectedTagsContext, 
  ContentsContext
} from '~/components';

import { 
  getAllContent
} from '~/api';


export const useContents = () => {
  const { contents, filtered, searchQuery, contentsActionDispatch: dispatch } = useContext(ContentsContext);
  const { searchedTags } = useContext(SelectedTagsContext); 
  
  const {
    isOpen: isOpenDrawerToCreateContent,
    onOpen: onOpenDrawerToCreateContent,
    onClose: onCloseDrawerToCreateContent,
  } = useDisclosure();
    
  useEffect(() => {
    (async () => {
      const result = await getAllContent();
      dispatch({ type: 'CONTENTS/SET_CONTENTS', contents: result});
    })();
  }, []);
  
  useEffect(() => {
    dispatch({ type: 'CONTENTS/SET_SEARCHED_TAG_IDS', searchedTagIds: searchedTags.map(({ id }) => id)});
  }, [searchedTags]);


  const onChangeSearchQuery = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    dispatch({ type: 'CONTENTS/SET_SEARCH_QUERY', searchQuery: e.target.value });
  }, []);
  

  return {
    contents,
    filtered,
    searchQuery,
    dispatch,
    onChangeSearchQuery,
    isOpenDrawerToCreateContent,
    onOpenDrawerToCreateContent,
    onCloseDrawerToCreateContent
  };
};
