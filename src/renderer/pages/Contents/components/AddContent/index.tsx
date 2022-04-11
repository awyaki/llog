import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { AddContentForm } from '~/components';


type AddContentProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddContent: VFC<AddContentProps> = ({ 
  isOpen,
  onClose,
  }) => {
  return (
    <div css={{
      width: isOpen ? '300px' : '0px',
      height: '100%',
      zIndex: 1,
      transitionProperty: 'width',
      transitionDuration: '1s',
      transitionTimingFunction: 'ease',
      borderLeft: `1px solid ${colors.cyan.DEFAULT}`,
      paddingLeft: '32px', 
    }}>
      <button 
        css={{
          width: '100%',
          display: 'block',
          textAlign: 'right',
          marginBottom: '16px',
        }}
        onClick={onClose}>X</button>
      <AddContentForm />
    </div>
  );
};
