import { VFC } from "react";

import { ContentForm } from "~/components";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

import { ContentWithRelation } from "~/pages/type";

import {
  NormalButton,
  WarningButton,
  DisabableNormalButton,
  Switch,
} from "~/components";

import { useUpdateContentForm } from "./hooks";

type UpdateButtonProps = {
  css?: CSSObject;
  form: string;
};

const UpdateButton: VFC<UpdateButtonProps> = ({ form, ...rest }) => {
  return (
    <NormalButton {...rest} form={form}>
      Update
    </NormalButton>
  );
};

type CancelButtonProps = {
  onCancel: () => void;
};

const ResetButton: VFC<CancelButtonProps> = ({ onCancel }) => {
  return <WarningButton onClick={onCancel}>Reset</WarningButton>;
};

type DeleteButtonProps = {
  css?: CSSObject;
  isDisable: boolean;
  onToggleIsDisable: () => void;
  onDeleteContent: () => void;
};

const DeleteButton: VFC<DeleteButtonProps> = ({
  isDisable,
  onToggleIsDisable,
  onDeleteContent,
  ...rest
}) => {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      {...rest}
    >
      <DisabableNormalButton
        css={{ marginRight: "16px" }}
        colorOptions={{
          primary: colors.red.DEFAULT,
          secondary: colors.white,
        }}
        text="Delete"
        isDisable={isDisable}
        onClick={onDeleteContent}
      />
      <Switch
        color={colors.red.DEFAULT}
        isOn={!isDisable}
        onClick={onToggleIsDisable}
      />
    </div>
  );
};

type UpdateContentFormProps = {
  onSubmit?: () => void;
  content: ContentWithRelation;
};

export const UpdateContentForm: VFC<UpdateContentFormProps> = ({
  content,
  onSubmit,
}) => {
  const {
    register,
    errors,
    handleSubmitUpdate,
    handleDeleteContent,
    handleToggleIsDisable,
    isDisable,
    isAlreadyNameExist,
    isMoreThanEqaulToPreviousNumber,
    searchQuery,
    setSearchQuery,
    handleChangeSearchQuery,
    selectedTags,
    setSelectedTags,
    handleToggleSelectedTags,
    handleResetForm,
  } = useUpdateContentForm({ content, onSubmit });

  const formName = "update-content";
  return (
    <>
      <ContentForm
        id={formName}
        register={register}
        errors={errors}
        onSubmit={handleSubmitUpdate}
        isAlreadyNameExist={isAlreadyNameExist}
        blockNumberValidate={isMoreThanEqaulToPreviousNumber}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onChangeSearchQuery={handleChangeSearchQuery}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        onToggleSelectedTags={handleToggleSelectedTags}
      />
      <div
        css={{
          marginBottom: "16px",
          paddingBottom: "16px",
          borderBottom: `1px solid ${colors.cyan.DEFAULT}`,
        }}
      >
        <UpdateButton css={{ marginRight: "8px" }} form={formName} />
        <ResetButton onCancel={handleResetForm} />
      </div>
      <DeleteButton
        isDisable={isDisable}
        onToggleIsDisable={handleToggleIsDisable}
        onDeleteContent={handleDeleteContent}
      />
    </>
  );
};
