import { SystemStyleObject } from '@chakra-ui/theme-tools';
import { colors } from '~/styleConfig/colors';
import { font } from '~/styleConfig/font';

const h2: SystemStyleObject = {
  color: colors.text,
  fontSize: font.size.L,
};

export const Heading = {
  variants: {
    'h2': h2,
  },
};
