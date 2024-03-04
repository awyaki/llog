import { VFC, useContext } from "react";

import {
  OpenModalToUpdateContentTagsButton,
  CreateTagButton,
  ContentContext,
  TagsList as BaseTagsList,
} from "~/components";

import { container } from "./style/container";

export const TagsList: VFC = () => {
  const { content } = useContext(ContentContext);
  if (content === null) return <></>;
  return (
    <>
      <ul css={{ ...container, marginBottom: "8px" }}>
        <li>
          <CreateTagButton />
        </li>
        <li>
          <OpenModalToUpdateContentTagsButton defaultTags={content.tags} />
        </li>
      </ul>
      <BaseTagsList tags={content.tags} />
    </>
  );
};
