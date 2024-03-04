import { createContext, FC, Dispatch, useEffect } from "react";

import { getAllTag } from "~/api";

import { useTag, TagAction as Action } from "./hooks";

import { Tag } from "@prisma/client";

type TagContextType = {
  tags: Tag[];
  dispatch: Dispatch<Action>;
};

export const TagContext = createContext<TagContextType>({
  tags: [],
  dispatch: () => {},
});

export const TagContextProvider: FC = ({ children }) => {
  const [tags, dispatch] = useTag();

  useEffect(() => {
    (async () => {
      const result = await getAllTag();
      dispatch({ type: "APP/SET_TAG", tags: result });
    })();
  }, []);

  return (
    <TagContext.Provider value={{ tags: tags, dispatch: dispatch }}>
      {children}
    </TagContext.Provider>
  );
};
