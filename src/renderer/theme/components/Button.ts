import { SystemStyleObject } from '@chakra-ui/theme-tools';
const notOperatorBase: SystemStyleObject = {
  minWidth: '50px',
  borderRadius: '20px',
  borderWidth: '2px',
  padding: '2px 50px',
};

const activeNotOperator: SystemStyleObject = {
  ...notOperatorBase,
  borderStyle: 'solid',
  borderColor: 'brand.600',
  borderWidth: '2px',
  backgroundColor: 'brand.600',
  color: 'white',
};


const nonActiveNotOperator: SystemStyleObject = {
  ...notOperatorBase,
  borderStyle: 'solid',
  borderColor: 'gray.200',
  borderWidth: '2px',
  backgroundColor: 'gray.200',
};

export const Button = {
  variants: {
    'active-not-operator': activeNotOperator,
    'non-active-not-operator': nonActiveNotOperator,
  },
};
