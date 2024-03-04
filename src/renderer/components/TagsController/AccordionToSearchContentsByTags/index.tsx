import { VFC, useState, useContext, useCallback } from "react";

import { colors, font } from "~/styleConfig";

import { CSSObject } from "@emotion/react";

import {
  SearchIcon,
  SelectedTagsContext,
  AccordionButtonWithText,
} from "~/components";

import { Collapse } from "@chakra-ui/transition";

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
  css?: CSSObject;
};

export const AccordionToSearchContentsByTags: VFC<Props> = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const { onToggleSearchedTags, searchedTags, filterTagsbyUserInput } =
    useContext(SelectedTagsContext);

  const toggleIsOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  const filteredTags = filterTagsbyUserInput(searchQuery);

  return (
    <div {...rest}>
      <AccordionButtonWithText
        isOpen={isOpen}
        text="Search by tags"
        onClick={toggleIsOpen}
        css={{
          marginBottom: "16px",
        }}
      />

      <Collapse in={isOpen}>
        <div
          css={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "16px",
          }}
        >
          <input
            css={{
              width: "200px",
              borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
            }}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon />
        </div>
        <ul
          css={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            "> li": {
              marginRight: "4px",
              marginBottom: "4px",
            },
          }}
        >
          {filteredTags.map(({ id, name }) => (
            <li key={id}>
              <button
                onClick={onToggleSearchedTags({ id, name })}
                css={
                  searchedTags.some((tag) => tag.id === id)
                    ? reverseTagStyle
                    : tagStyle
                }
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};
