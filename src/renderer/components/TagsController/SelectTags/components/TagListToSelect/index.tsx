import { VFC, useContext, useCallback, Dispatch, SetStateAction } from "react";

import { colors, font } from "~/styleConfig";

import { deleteTag, getAllTag } from "~/api";

import { Tag } from "@prisma/client";

import { CSSObject } from "@emotion/react";

import { SelectedTagsContext } from "~/components";

const tagStyle: CSSObject = {
  minWidth: "80px",
  textAlign: "center",
  fontSize: font.size.SS,
  borderRadius: "4px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.white,
  color: colors.cyan.DEFAULT,
  padding: "2px 4px",
  transition: ".25s",
};

const reverseTagStyle: CSSObject = {
  ...tagStyle,
  borderColor: colors.white,
  backgroundColor: colors.cyan.DEFAULT,
  color: colors.white,
};

type Props = {
  searchQuery: string;
  selectedTags: Tag[];
  setSelectedTags: Dispatch<SetStateAction<Tag[]>>;
  onToggleSelectedTags: (tag: Tag) => void;
};

export const TagListToSelect: VFC<Props> = ({
  searchQuery,
  selectedTags,
  setSelectedTags,
  onToggleSelectedTags,
}) => {
  const { filterTagsbyUserInput, setTagsAction } =
    useContext(SelectedTagsContext);

  const filteredTags = filterTagsbyUserInput(searchQuery);

  const deleteTagWithId = useCallback(async (id: number) => {
    await deleteTag(id);
    const newAlltags = await getAllTag();
    setSelectedTags((tags) => {
      return tags.filter((tag) => tag.id !== id);
    });
    setTagsAction(newAlltags);
  }, []);

  return (
    <ul
      css={{
        width: "100%",
        maxWidth: "200px",
        maxHeight: "400px",
        overflowY: "scroll",
        display: "flex",
        flexWrap: "wrap",
        "> li": {
          marginRight: "4px",
          marginBottom: "4px",
        },
      }}
    >
      {filteredTags.map(({ id, name }) => {
        const style = selectedTags.some((tag) => tag.id === id)
          ? reverseTagStyle
          : tagStyle;
        return (
          <li key={id}>
            <button
              onClick={() => onToggleSelectedTags({ id, name })}
              css={{ ...style, marginRight: "4px" }}
            >
              {name}
            </button>
            <button onClick={() => deleteTagWithId(id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};
