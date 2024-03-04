import { useState, useCallback, useContext, ChangeEventHandler } from "react";

import { useForm, Validate } from "react-hook-form";

import {
  SelectedTagsContext,
  NotifierContext,
  ContentsContext,
} from "~/components";

import type { AddContentFormProps } from "~/components";

import { getAllContent, createContent } from "~/api";

type Inputs = {
  contentName: string;
  numberOfBlocks: string;
};

export const useAddContentForm = (
  onSubmit: AddContentFormProps["onSubmit"],
) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [isOpenSelectTags, setIsOpenSelectTags] = useState(false);

  const { setMessage } = useContext(NotifierContext);

  const { contents, contentsActionDispatch: dispatch } =
    useContext(ContentsContext);

  const { selectedTags, setSelectedTags, onToggleSelectedTags } =
    useContext(SelectedTagsContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onSubmit",
    defaultValues: { contentName: "", numberOfBlocks: "" },
  });

  const _onSubmit = useCallback(
    async (data: Inputs) => {
      const { contentName, numberOfBlocks } = data;

      // 外部ソースのcontentsの更新と更新後contentsデータの取得
      await createContent(contentName, selectedTags, Number(numberOfBlocks));
      const allContents = await getAllContent();

      dispatch({ type: "CONTENTS/SET_CONTENTS", contents: allContents });

      // stateのリセット
      setSelectedTags([]);
      setSearchQuery("");
      setValue("numberOfBlocks", "");
      setValue("contentName", "");

      setMessage("Create");

      // AddContentFormを使用するコンポーネントが指定する振る舞いの実行
      if (onSubmit !== undefined) onSubmit();
    },
    [setSelectedTags, setSearchQuery, setValue, selectedTags],
  );

  const isAlreadyNameExist = useCallback<Validate<string>>(
    (contentName) => {
      const isOk = !contents.some((content) => content.name === contentName);
      return isOk || "This name have already been existed.";
    },
    [contents],
  );

  const handleClearAllInput = useCallback(() => {
    setSelectedTags([]);
    setValue("numberOfBlocks", "");
    setValue("contentName", "");
  }, [setSelectedTags, setValue]);

  const handleChangeSearchQuery: ChangeEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        setSearchQuery(e.target.value);
      },
      [setSearchQuery],
    );

  const toggleIsOpenSelectTags = useCallback(() => {
    setIsOpenSelectTags((p) => !p);
  }, [setIsOpenSelectTags]);

  return {
    register,
    errors,
    searchQuery,
    handleSubmit: handleSubmit(_onSubmit),
    isAlreadyNameExist,
    handleClearAllInput,
    handleChangeSearchQuery,
    toggleIsOpenSelectTags,
    isOpenSelectTags,
    selectedTags,
    setSelectedTags,
    setSearchQuery,
    onToggleSelectedTags,
  };
};
