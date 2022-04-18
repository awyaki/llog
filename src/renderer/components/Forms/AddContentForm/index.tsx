import { VFC } from 'react';

export type AddContentFormProps = {
  onSubmit?: () => void;
};

import { ContentForm } from '~/components';

import { useAddContentForm } from './hooks';

export const AddContentForm: VFC<AddContentFormProps> = ({
  onSubmit
}) => {
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


  return (
    <ContentForm 
      errors={errors}
      register={register}
      searchQuery={searchQuery}
      isAlreadyNameExist={isAlreadyNameExist}
      onToggleSelectedTags={onToggleSelectedTags}
      onChangeSearchQuery={handleChangeSearchQuery}
      onClearAllInput={handleClearAllInput}
      onSubmit={handleSubmit}
      setSelectedTags={setSelectedTags}
      selectedTags={selectedTags}
      setSearchQuery={setSearchQuery}
    />
  );
};

