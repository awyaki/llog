import { VFC, Dispatch, SetStateAction } from "react";

import { CSSObject } from "@emotion/react";

import { Mode } from "../../types";

import { MarkdownEditor } from "./components/MarkdownEditor";
import { MarkdownPreview } from "./components/MarkdownPreview";

type Props = {
  mode: Mode;
  markdown: string;
  setMarkdown: Dispatch<SetStateAction<string>>;
  css?: CSSObject;
};

export const Note: VFC<Props> = ({ mode, markdown, setMarkdown, ...rest }) => {
  return (
    <div {...rest}>
      {mode === "edit" ? (
        <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
      ) : (
        <MarkdownPreview markdown={markdown} />
      )}
    </div>
  );
};
