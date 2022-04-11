import { VFC } from 'react';

import { 
  AddContentForm,
  SideMenu,
  } from '~/components';


type AddContentProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddContent: VFC<AddContentProps> = ({ 
  isOpen,
  onClose,
  }) => {
  return (
    <SideMenu 
      isOpen={isOpen}
      onClose={onClose}>
      <AddContentForm />
    </SideMenu>
  );
};
