import { VFC } from 'react';
import { Header as DefaultHeader } from '~/pages/Header';

type Props = {
  isNoteChange: boolean;
};

export const Header: VFC<Props> = ({ isNoteChange }) => {
  const confirmer = () => {
    const message = `Do you really want to leave the page? 
                    Every text which isn't saved will be clear.`
    return confirm(message);
  };

  return <DefaultHeader confirmer={isNoteChange ? confirmer : undefined}/>;
};
