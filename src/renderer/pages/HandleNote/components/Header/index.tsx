import { VFC } from 'react';
import { Header as DefaultHeader } from '~/pages/Header';

type Props = {
  isNoteChange: boolean;
};

export const Header: VFC<Props> = ({ isNoteChange }) => {
  const confirmer = () => {
    const message = `Do you really want to leave the page? Every data of the note which aren't saved will be completely clear.`
    return confirm(message);
  };

  return <DefaultHeader confirmer={isNoteChange ? confirmer : undefined}/>;
};
