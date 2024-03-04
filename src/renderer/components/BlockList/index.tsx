import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { makeContainer } from "~/pages/style";

import { Block } from "@prisma/client";

type Props = {
  css?: CSSObject;
  blocks: Block[];
};

export const BlockList: VFC<Props> = ({ blocks, ...rest }) => {
  return (
    <ul
      css={{
        display: "flex",
        flexWrap: "wrap",
        "> li": {
          marginRight: "4px",
          marginBottom: "4px",
        },
      }}
      {...rest}
    >
      {blocks.map(({ id, level, unitNumber }) => (
        <li key={id} css={makeContainer(level)}>
          {unitNumber}
        </li>
      ))}
    </ul>
  );
};
