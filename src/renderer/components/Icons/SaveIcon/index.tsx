import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { Icon } from "@chakra-ui/react";

import { MdSave } from "react-icons/md";

type Props = {
  css?: CSSObject;
};

export const SaveIcon: VFC<Props> = ({ ...rest }) => {
  return <Icon as={MdSave} {...rest} />;
};
