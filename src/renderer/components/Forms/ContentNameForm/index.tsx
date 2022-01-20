import { VFC, useCallback, useContext } from 'react';

import { Validate } from 'react-hook-form';

import { inputBox, errorStyle } from './style';

import { updateContentName, getAllContent } from '~/api';

import { useForm } from 'react-hook-form';

import { ContentsContext, NotifierContext } from '~/components';

type Props = {
  id: number;
  onSubmit: () => void;
};

type Input = {
  name: string;
};

export const ContentNameForm: VFC<Props> = ({ id, onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Input>({ 
    mode: 'onSubmit',
    defaultValues: { name: '' }
  });

  
  const { setMessage } = useContext(NotifierContext);
  const { contents, setContents } = useContext(ContentsContext);

  const onSubmitContentName = useCallback(async ({ name }: Input) => {
    await updateContentName({ id, name })
    const updatedContents = await getAllContent();
    onSubmit();
    setContents(updatedContents);
    setMessage('updated!');
    setValue('name', '');
  }, [onSubmit, setContents, setMessage, setValue]);

  const isAlreadyNameExist = useCallback<Validate<string>>((contentName) => {
    const isOk = !contents.some((content) => content.name === contentName);
    return isOk || 'This name have already been existed.';
  }, [contents]);

  return (
    <form onSubmit={handleSubmit(onSubmitContentName)}>
      <input 
        css={inputBox}
        {...register('name', 
          { required: { value: true, message: 'You should fill in this field.' }, 
            maxLength: 100, 
            validate: { isAlreadyNameExist: isAlreadyNameExist } })} />
      <div css={errorStyle}>{errors.name?.message}</div>
      <button 
        type="button"
        >OK</button>
    </form>
  );
};
