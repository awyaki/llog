import { VFC } from "react";

import { Tag } from "@prisma/client";

import { tagsContainer } from "../style";

import { CSSObject } from "@emotion/react";

import { colors, font } from "~/styleConfig";

import { motion, MotionProps } from "framer-motion";

type Props = {
  css?: CSSObject;
  secandary?: boolean;
  onClickTag?: (id: number) => void;
  tags: Tag[];
} & Pick<MotionProps, "variants">;

export const TagsList: VFC<Props> = ({
  onClickTag = () => {},
  variants,
  tags,
  secandary,
  ...rest
}) => {
  return (
    <motion.ul variants={variants} css={tagsContainer} {...rest}>
      {tags.map(({ id, name }) => (
        <li key={id}>
          <motion.button
            onClick={() => onClickTag(id)}
            key={id}
            variants={variants}
            style={{
              minWidth: "80px",
              textAlign: "center",
              fontSize: font.size.SS,
              borderRadius: "4px",
              borderWidth: "1px",
              borderStyle: "solid",
              padding: "2px 4px",
              borderColor: colors.cyan.DEFAULT,
              backgroundColor: secandary ? colors.cyan.SECOND : "transparent",
              color: colors.cyan.DEFAULT,
            }}
          >
            {name}
          </motion.button>
        </li>
      ))}
    </motion.ul>
  );
};
