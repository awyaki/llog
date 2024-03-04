import { VFC } from "react";

import { container, tagStyle } from "./style";

import { Tag } from "@prisma/client";

type Props = {
  tags: Tag[];
};

export const TagList: VFC<Props> = ({ tags }) => {
  return (
    <ul css={container}>
      {tags.map(({ id, name }) => (
        <li key={id} css={tagStyle}>
          {name}
        </li>
      ))}
    </ul>
  );
};
