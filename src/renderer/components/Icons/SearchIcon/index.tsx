import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

import { MdSearch } from "react-icons/md";

import { Icon } from "@chakra-ui/react";

type Props = {
  css?: CSSObject;
};

export const SearchIcon: VFC<Props> = ({ ...rest }) => {
  const { css } = rest;
  const style: CSSObject | undefined = css
    ? undefined
    : {
        color: colors.cyan.DEFAULT,
      };

  return <Icon css={style} as={MdSearch} {...rest} />;
};
