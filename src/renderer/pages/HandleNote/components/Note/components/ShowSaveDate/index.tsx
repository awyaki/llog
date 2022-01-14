import { VFC } from 'react';

import { colors } from '~/styleConfig/colors';
import { font } from '~/styleConfig/font';

import { Box } from '@chakra-ui/react';

import { makeFormalDateString } from '~/utils';

type Props = {
  notSaved: boolean;
  date?: Date;
};

export const ShowSaveDate: VFC<Props> = ({ notSaved, date }) => {
  const dateString = date !== undefined ? makeFormalDateString(date) : '';

  if (notSaved) {
    return <Box color={colors.red.DEFAULT} fontSize={font.size.SS}>This version is not saved.</Box>;
  } else {
    return <Box color={colors.text} fontSize={font.size.SS}>{dateString ?? ''}</Box>;
  };
};
