import { VFC, ChangeEventHandler, Dispatch, SetStateAction } from "react";

import { NormalButton, WarningButton, SelectTags } from "~/components";

import { Tag } from "@prisma/client";

import { inputBox } from "~/pages/style";

import { CSSObject } from "@emotion/react";

import { colors, font } from "~/styleConfig";

import { UseFormReturn, Validate, UseFormRegister } from "react-hook-form";

const error: CSSObject = {
  height: "32px",
  color: colors.red.DEFAULT,
  fontSize: font.size.SS,
};

export type ContentFormProps = {
  id: string;
  onChangeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  isAlreadyNameExist: Validate<string>;
  blockNumberValidate?: Validate<string>;
  onToggleSelectedTags: (tag: Tag) => void;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setSelectedTags: Dispatch<SetStateAction<Tag[]>>;
  selectedTags: Tag[];
  onSubmit: () => void;
  errors: UseFormReturn["formState"]["errors"];
  register: UseFormRegister<any>;
};

export const ContentForm: VFC<ContentFormProps> = ({
  id,
  errors,
  register,
  searchQuery,
  onSubmit,
  onChangeSearchQuery,
  isAlreadyNameExist,
  blockNumberValidate,
  onToggleSelectedTags,
  setSelectedTags,
  selectedTags,
  setSearchQuery,
}) => {
  const numberOfBlocksOption = blockNumberValidate
    ? {
        required: { value: true, message: "You should fill in this field." },
        min: {
          value: 1,
          message:
            "You should fill in this field with a number which is more than 0.",
        },
        max: {
          value: 3000,
          message:
            "You should fill in this field with a number which is equal to or less than 3000.",
        }, // TODO: The number 3000 is not considered number. We should consider that how many blocks a content will have.
        pattern: {
          value: /^[0-9]+$/i,
          message: "You should fill in this field with a number.",
        },
        validate: { blockNumberValidate: blockNumberValidate },
      }
    : {
        required: { value: true, message: "You should fill in this field." },
        min: {
          value: 1,
          message:
            "You should fill in this field with a number which is more than 0.",
        },
        max: {
          value: 3000,
          message:
            "You should fill in this field with a number which is equal to or less than 3000.",
        }, // TODO: The number 3000 is not considered number. We should consider that how many blocks a content will have.
        pattern: {
          value: /^[0-9]+$/i,
          message: "You should fill in this field with a number.",
        },
      };

  return (
    <>
      <form id={id} onSubmit={onSubmit}>
        <label
          css={{
            display: "block",
          }}
          htmlFor="contentName"
        >
          Name
        </label>
        <input
          css={inputBox}
          {...register("contentName", {
            required: {
              value: true,
              message: "You should fill in this field.",
            },
            maxLength: 100,
            validate: { isAlreadyNameExist: isAlreadyNameExist },
          })}
        />
        <div css={error}>{errors.contentName?.message}</div>

        <label
          css={{
            display: "block",
          }}
          htmlFor="numberOfBlocks"
        >
          Blocks
        </label>
        <input
          css={inputBox}
          {...register("numberOfBlocks", numberOfBlocksOption)}
        />
        <div css={error}>{errors.numberOfBlocks?.message}</div>
      </form>
      <div
        css={{
          marginBottom: "16px",
        }}
      >
        <SelectTags
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          onToggleSelectedTags={onToggleSelectedTags}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onChangeSearchQuery={onChangeSearchQuery}
        />
      </div>
    </>
  );
};
