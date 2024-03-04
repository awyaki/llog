import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { Icon } from "@chakra-ui/react";

import { MdNoteAdd } from "react-icons/md";

type Props = {
  css?: CSSObject;
};

export const NoteAddIcon: VFC<Props> = ({ ...rest }) => {
  return <Icon as={MdNoteAdd} {...rest} />;
};
