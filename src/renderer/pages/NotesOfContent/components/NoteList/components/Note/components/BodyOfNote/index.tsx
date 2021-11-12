import { VFC } from 'react';

type Props = { 
  html: string;
};

export const BodyOfNote: VFC<Props> = ({ html }) => { 
  return (
    <div>{html}</div>
  );
};
