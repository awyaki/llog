import { VFC, useContext, useEffect } from "react";

import { container } from "./style";

import { EditIcon } from "./components";

import { Tag } from "@prisma/client";

import { SelectedTagsContext } from "../SelectedTagsContextProvider";

type Props = {
  defaultTags: Tag[];
};

export const OpenModalToUpdateContentTagsButton: VFC<Props> = ({
  defaultTags,
}) => {
  const { onOpenModalToUpdateContentTags, setSelectedTags } =
    useContext(SelectedTagsContext);

  useEffect(() => {
    setSelectedTags(defaultTags);
  }, [defaultTags]);

  return (
    <button
      css={container}
      type="button"
      onClick={onOpenModalToUpdateContentTags}
    >
      <EditIcon />
    </button>
  );
};
