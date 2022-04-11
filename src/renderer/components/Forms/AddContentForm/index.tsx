import { VFC } from 'react';

import { NormalButton, WarningButton, SelectTags } from '~/components';

import { inputBox } from '~/pages/style';

import { CSSObject } from '@emotion/react';

import { colors, font } from '~/styleConfig';

import { useAddContentForm } from './hooks';

const error: CSSObject = {
  height: '32px',
  color: colors.red.DEFAULT,
  fontSize: font.size.SS,
};


export type AddContentFormProps = {
  onSubmit?: () => void;
};

export const AddContentForm: VFC<AddContentFormProps> = ({
  onSubmit
}) => {
  const {
    errors,
    register,
    searchQuery,
    handleSubmit,
    handleClearAllInput,
    handleChangeSearchQuery,
    isAlreadyNameExist,
    toggleIsOpenSelectTags,
    onToggleSelectedTags,
    isOpenSelectTags,
    setSelectedTags,
    selectedTags,
    setSearchQuery,
  } = useAddContentForm(onSubmit);


  return (
      <div>
      <form 
        id="content-create" 
        onSubmit={handleSubmit}>
          <label 
            css={{
              display: 'block',
            }}
            htmlFor="contentName">
              Name</label>
          <input 
            css={inputBox}
            {...register('contentName', 
              { required: { value: true, message: 'You should fill in this field.' }, 
                maxLength: 100, 
                validate: { isAlreadyNameExist: isAlreadyNameExist } })} />
        <div css={error}>{errors.contentName?.message}</div>

        <label 
          css={{
            display: 'block',
          }} 
          htmlFor="numberOfBlocks">Blocks</label>
        <input 
          css={inputBox}
          {...register('numberOfBlocks', 
            { required: { value: true, message: 'You should fill in this field.' }, 
            min: { value: 1, message: 'You should fill in this field with a number which is more than 0.' }, 
            max: { value: 1500, message: 'You should fill in this field with a number which is equal to or less than 1500.' },  // TODO: The number 1500 is not considered number. We should consider that how many blocks a content will have.
            pattern: { value: /^[0-9]+$/i, message: 'You should fill in this field with a number.' }})} />
          <div css={error}>{errors.numberOfBlocks?.message}</div>
        </form>
        <SelectTags 
          isOpen={isOpenSelectTags}
          toggleIsOpen={toggleIsOpenSelectTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          onToggleSelectedTags={onToggleSelectedTags}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onChangeSearchQuery={handleChangeSearchQuery} />
        <NormalButton 
          css={{ width: '84px', marginRight: '8px' }}
          form="content-create"
          type="submit">
          Create
        </NormalButton>
        <WarningButton 
          css={{ width: '84px' }}
          onClick={handleClearAllInput}
          type="button">
          Clear
        </WarningButton>
      </div>
  );
};

