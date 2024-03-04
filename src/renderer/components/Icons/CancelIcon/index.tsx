import { VFC } from "react";

import { colors } from "~/styleConfig";

import { MdCancel } from "react-icons/md";

import { Icon } from "@chakra-ui/react";

export const CancelIcon: VFC = () => {
  return <Icon as={MdCancel} w={4} h={4} color={colors.cyan.DEFAULT} />;
};
