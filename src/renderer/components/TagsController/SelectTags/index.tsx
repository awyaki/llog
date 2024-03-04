import { VFC, Dispatch, SetStateAction, ChangeEventHandler } from "react";

import { Tag } from "@prisma/client";

import { SearchAndCreateInput, TagListToSelect } from "~/components";

export * from "./components";

export * from "./hooks";

type Props = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  onChangeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  selectedTags: Tag[];
  onToggleSelectedTags: (tag: Tag) => void;
  setSelectedTags: Dispatch<SetStateAction<Tag[]>>;
};

export const SelectTags: VFC<Props> = ({
  searchQuery,
  setSearchQuery,
  onChangeSearchQuery,
  selectedTags,
  onToggleSelectedTags,
  setSelectedTags,
}) => {
  return (
    <>
      <h2 css={{ marginBottom: "8px" }}>Search or Create tags</h2>
      <SearchAndCreateInput
        setSelectedTags={setSelectedTags}
        setSearchQuery={setSearchQuery}
        onChangeSearchQuery={onChangeSearchQuery}
      />
      <TagListToSelect
        onToggleSelectedTags={onToggleSelectedTags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        searchQuery={searchQuery}
      />
    </>
  );
};
