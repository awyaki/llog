import { VFC } from "react";
import { Icon } from "@chakra-ui/react";
import { MdOutlineModeEditOutline } from "react-icons/md";

import { colors } from "~/styleConfig/colors";

export const EditIcon: VFC = () => {
  return <Icon as={MdOutlineModeEditOutline} w={4} h={4} color={colors.text} />;
};
