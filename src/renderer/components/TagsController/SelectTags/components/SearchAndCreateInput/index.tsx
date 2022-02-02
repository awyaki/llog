import { 
  VFC,
  useContext,
  useCallback,
  ChangeEventHandler,
  } from 'react';

import { 
  SelectedTagsContext,
  NotifierContext,
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

type Props = {
  onChangeSearchQuery: ChangeEventHandler<HTMLInputElement>;
};

export const SearchAndCreateInput: VFC<Props> = ({
  onChangeSearchQuery
}) => {

  const { 
    tags,
    setSelectedTags,
    setTagsAction,
  } = useContext(SelectedTagsContext);

  const { 
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Input>({ defaultValues: { newTagName: '' } });
  
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
  
  
  return (
    <form id="create-tag" onSubmit={handleSubmit(onCreateTag)}>
      <input
        css={{
        width: '200px',
        borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
      }} 
      {...register('newTagName', { 
        onChange: onChangeSearchQuery,
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
