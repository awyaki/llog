import {
  useEffect,
  useCallback,
  ChangeEventHandler,
  useContext,
  useState,
} from "react";

import { useDisclosure } from "@chakra-ui/react";

import { SelectedTagsContext, ContentsContext } from "~/components";

import { getAllContent } from "~/api";

export const useContents = () => {
  const {
    contents,
    filtered,
    searchQuery,
    contentsActionDispatch: dispatch,
  } = useContext(ContentsContext);
  const [isOpenAddContentForm, setIsOpenAddContentForm] = useState(false);
  const { searchedTags } = useContext(SelectedTagsContext);
  const {
    isOpen: isOpenDrawerToCreateContent,
    onOpen: onOpenDrawerToCreateContent,
    onClose: onCloseDrawerToCreateContent,
  } = useDisclosure();

  useEffect(() => {
    (async () => {
      const result = await getAllContent();
      dispatch({ type: "CONTENTS/SET_CONTENTS", contents: result });
    })();
  }, []);

  useEffect(() => {
    dispatch({
      type: "CONTENTS/SET_SEARCHED_TAG_IDS",
      searchedTagIds: searchedTags.map(({ id }) => id),
    });
  }, [searchedTags]);

  const onChangeSearchQuery = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      dispatch({
        type: "CONTENTS/SET_SEARCH_QUERY",
        searchQuery: e.target.value,
      });
    },
    [],
  );

  const handleCloseAddContentForm = useCallback(() => {
    setIsOpenAddContentForm(false);
  }, [setIsOpenAddContentForm]);

  const handleToggleIsOpenAddContentForm = useCallback(() => {
    setIsOpenAddContentForm((p) => !p);
  }, [setIsOpenAddContentForm]);

  return {
    contents,
    filtered,
    searchQuery,
    dispatch,
    onChangeSearchQuery,
    isOpenAddContentForm,
    handleCloseAddContentForm,
    handleToggleIsOpenAddContentForm,
    isOpenDrawerToCreateContent,
    onOpenDrawerToCreateContent,
    onCloseDrawerToCreateContent,
  };
};
