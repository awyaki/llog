import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { Icon } from "@chakra-ui/react";

import { MdEdit } from "react-icons/md";

type Props = {
  css?: CSSObject;
};

export const EditIcon: VFC<Props> = ({ ...rest }) => {
  return <Icon as={MdEdit} {...rest} />;
};
