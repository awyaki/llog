import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { Icon } from "@chakra-ui/react";

import { MdStickyNote2 } from "react-icons/md";

type Props = {
  css?: CSSObject;
};

export const NotesIcon: VFC<Props> = ({ ...rest }) => {
  return <Icon as={MdStickyNote2} {...rest} />;
};
