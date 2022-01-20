import { VFC, useCallback } from 'react';

import { useForm } from 'react-hook-form';

type Input = {
  contentName: string;
};
export const ContentNameForm: VFC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Input>({ 
    mode: 'onSubmit',
    defaultValues: { 'contentName': '' }
  });

  return (
    <form>
      <label css={labelStyle} htmlFor="contentName">Name</label>
      <input 
        css={inputBox}
        {...register('contentName', 
          { required: { value: true, message: 'You should fill in this field.' }, 
            maxLength: 100, 
            validate: { isAlreadyNameExist: isAlreadyNameExist } })} />
      <div css={errorStyle}>{errors.contentName?.message}</div>
    </form>
  );
};
