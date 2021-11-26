import { createContext, FC, Dispatch } from 'react';

import { useTag, TagAction as Action } from '~/hooks';

import { Tag } from '@prisma/client';

type TagContextType = {
  tags: Tag[];
  dispatch: Dispatch<Action>;
};

export const TagContext = createContext<TagContextType>({ tags: [], dispatch: () => {} });

export const TagContextProvider: FC = ({ children }) => {
  const [tags, dispatch] = useTag();
  return (
    <TagContext.Provider value={{ tags: tags, dispatch: dispatch }}>
      {children}
    </TagContext.Provider>
  );
};
