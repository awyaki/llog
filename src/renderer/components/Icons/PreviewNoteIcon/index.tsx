import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { Icon } from "@chakra-ui/react";

import { MdPlayArrow } from "react-icons/md";

type Props = {
  css?: CSSObject;
};

export const PreviewNoteIcon: VFC<Props> = ({ ...rest }) => {
  return <Icon as={MdPlayArrow} {...rest} />;
};
