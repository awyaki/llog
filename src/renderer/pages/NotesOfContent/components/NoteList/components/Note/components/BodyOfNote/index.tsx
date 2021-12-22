import { VFC } from 'react';

import 'zenn-content-css';

type Props = { 
  html: string;
};

export const BodyOfNote: VFC<Props> = ({ html }) => { 
  return (
    <div className="znc" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
};
