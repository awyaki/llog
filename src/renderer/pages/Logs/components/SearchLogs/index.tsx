import { 
  VFC,
  } from 'react';

import { makeFormalDateString } from '~/utils';

type Props = {
  sinceQuery: Date | null;
  setSinceQuery: (arg: Date) => void;
};

export const SearchLogs: VFC<Props> = ({
  sinceQuery,
  setSinceQuery,
}) => {

  return (
    <div>
      <input 
        onChange={(e) => {
          console.log(e.target.value);
          setSinceQuery(new Date(e.target.value));
        }}
        type="date"
        />
      <div>{sinceQuery !== null ? makeFormalDateString(sinceQuery) : undefined}</div>
    </div>
  );
};
