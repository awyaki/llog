import { 
  VFC,
  useContext,
  useCallback,
  useEffect
  } from 'react';

import { 
  SelectedTagsContext,
  NotifierContext,
  SearchIcon
  } from '~/components';


import { colors, font } from '~/styleConfig';

import { createTag, getAllTag } from '~/api';

import { 
  useForm, 
  Validate,
  } from 'react-hook-form';


type Input = {
  newTagName: string;
};

export const SearchAndCreateInput: VFC = () => {

  const { 
    tags,
    setSearchQueryAction,
    setSelectedTags,
    setTagsAction,
  } = useContext(SelectedTagsContext);

  const { 
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<Input>({ defaultValues: { newTagName: '' } });
  
  const inputValue = watch('newTagName');

  const { setMessage } = useContext(NotifierContext);

  const isAlreadyNameExist = useCallback<Validate<string>>((tagName) => {
    const isOk = !tags.some((tag) => tag.name === tagName);
    return isOk || 'Completely match!';
  }, [tags]);

  const onCreateTag = useCallback(async (data: Input) => {
    const { newTagName } = data;
    const newTag = await createTag(newTagName);
    const allTags = await getAllTag();
    setSelectedTags((prev) => prev.concat(newTag));
    setTagsAction(allTags);
    setValue('newTagName', '');
    setMessage('A new Tag is Created.');
  }, []);
  
  useEffect(() => {
    setSearchQueryAction(inputValue)
  }, [inputValue]) 
  
  return (
    <form id="create-tag" onSubmit={handleSubmit(onCreateTag)}>
      <input 
        css={{
        width: '200px',
        borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
      }} 
      {...register('newTagName', { 
        required: { value: true, message: '' },
        validate: { isAlreadyNameExist },
        })} />
      <button
        hidden
        type="submit"></button>
      <div css={{
        height: '24px',
        color: colors.cyan.DEFAULT,
        fontSize: font.size.SS,
      }}>{errors.newTagName?.message}</div>
    </form>
  );
};
