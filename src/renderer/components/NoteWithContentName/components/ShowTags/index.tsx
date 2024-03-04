import { VFC } from "react";

import { Tag as TagType } from "@prisma/client";

import { Tag } from "./components";

import { container } from "./style";

type Props = {
  tags: Pick<TagType, "id" | "name">[];
};

export const ShowTags: VFC<Props> = ({ tags }) => {
  return (
    <ul css={container}>
      {tags.map(({ id, name }) => (
        <li key={id}>
          <Tag name={name} />
        </li>
      ))}
    </ul>
  );
};
