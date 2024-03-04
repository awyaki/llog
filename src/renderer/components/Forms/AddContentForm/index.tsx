import { VFC } from "react";
import { CSSObject } from "@emotion/react";

import { NormalButton, WarningButton } from "~/components";

export type AddContentFormProps = {
  onSubmit?: () => void;
};

import { ContentForm } from "~/components";

import { useAddContentForm } from "./hooks";

type AddButtonProps = {
  form: string;
  css?: CSSObject;
};

const AddButton: VFC<AddButtonProps> = ({ form, ...rest }) => {
  return (
    <NormalButton css={{ width: "84px" }} form={form} type="submit" {...rest}>
      Add
    </NormalButton>
  );
};

type ClearButtonProps = {
  onClear: () => void;
};

const ClearButton: VFC<ClearButtonProps> = ({ onClear }) => {
  return (
    <WarningButton css={{ width: "84px" }} onClick={onClear} type="button">
      Clear
    </WarningButton>
  );
};

export const AddContentForm: VFC<AddContentFormProps> = ({ onSubmit }) => {
  const {
    errors,
    register,
    isAlreadyNameExist,
    searchQuery,
    onToggleSelectedTags,
    handleSubmit,
    handleChangeSearchQuery,
    handleClearAllInput,
    setSelectedTags,
    selectedTags,
    setSearchQuery,
  } = useAddContentForm(onSubmit);

  const formName = "add-content-form";

  return (
    <>
      <ContentForm
        id={formName}
        errors={errors}
        register={register}
        searchQuery={searchQuery}
        isAlreadyNameExist={isAlreadyNameExist}
        onToggleSelectedTags={onToggleSelectedTags}
        onChangeSearchQuery={handleChangeSearchQuery}
        onSubmit={handleSubmit}
        setSelectedTags={setSelectedTags}
        selectedTags={selectedTags}
        setSearchQuery={setSearchQuery}
      />
      <AddButton css={{ marginRight: "8px" }} form={formName} />
      <ClearButton onClear={handleClearAllInput} />
    </>
  );
};
