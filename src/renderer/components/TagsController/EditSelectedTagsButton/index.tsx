import { VFC, useContext } from "react";

import { SelectedTagsContext } from "../SelectedTagsContextProvider";

import { EditIcon, TagAnimationButtonWrapper } from "~/components";

export const EditSelectedTagsButton: VFC = () => {
  const { onOpenModalToSelectTags } = useContext(SelectedTagsContext);
  return (
    <TagAnimationButtonWrapper type="button" onClick={onOpenModalToSelectTags}>
      <EditIcon />
    </TagAnimationButtonWrapper>
  );
};
