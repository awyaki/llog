import { VFC } from "react";
import { Header as DefaultHeader } from "~/pages/Header";

type Props = {
  isNoteChange: boolean;
  confirmer: () => boolean;
};

export const Header: VFC<Props> = ({ isNoteChange, confirmer }) => {
  return <DefaultHeader confirmer={isNoteChange ? confirmer : undefined} />;
};
