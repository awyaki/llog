import { VFC, useContext } from "react";

import { container } from "./style";

import { SearchIcon } from "./components";

import { SelectedTagsContext } from "../SelectedTagsContextProvider";

export const EditSearchedTagsButton: VFC = () => {
  const { onOpenModalToSearchTags } = useContext(SelectedTagsContext);
  return (
    <button css={container} type="button" onClick={onOpenModalToSearchTags}>
      <SearchIcon />
    </button>
  );
};
