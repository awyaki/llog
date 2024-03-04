import { VFC, useContext } from "react";

import { CSSObject } from "@emotion/react";

import { tagsContainer, tagStyle } from "../style";

import { Tag } from "@prisma/client";

type Props = {
  selectedTags: Tag[];
  css?: CSSObject;
};

export const SelectedTagsList: VFC<Props> = ({ selectedTags, ...rest }) => {
  return (
    <ul css={tagsContainer} {...rest}>
      {selectedTags.map(({ id, name }) => (
        <li key={id}>
          <div css={tagStyle}>{name}</div>
        </li>
      ))}
    </ul>
  );
};
