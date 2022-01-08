import { VFC, useState, MouseEventHandler, useCallback } from 'react';

import { Tag, Content } from '@prisma/client';

import {
  CreateTagButton,
  EditSelectedTagsButton
} from '~/components';

import {
  container,
  buttonStyle,
  inputBox,
  errorStyle,
  labelStyle
} from './style';

import { pageTitle } from '~/pages/style/pageTitle';

import { useForm, Validate } from 'react-hook-form';

type Props = {
  contents: Content[]; 
  onOpenTagCreateModal: MouseEventHandler<HTMLButtonElement>;
  onCreateNewContent: (name: string, tags: Tag[], numberOfBlocks: number) => Promise<void>;
};

type Inputs = {
  contentName: string;
  numberOfBlocks: string;
};

export const CreateNewContent: VFC<Props> = ({ 
  contents,
  onOpenTagCreateModal,
  onCreateNewContent
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({ 
    mode: 'onSubmit',
    defaultValues: { 'contentName': '', 'numberOfBlocks': '' }
  });

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  
  const onSubmit = useCallback(async (data: Inputs) => {
    const { contentName, numberOfBlocks } = data;
    await onCreateNewContent(contentName, selectedTags, Number(numberOfBlocks));
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
    console.log('CreateNewContent numberOfBlocks', data.numberOfBlocks);
    console.log('CreateNewContent contentName', data.contentName);
  }, []);  

  const isAlreadyNameExist = useCallback<Validate<string>>((contentName) => {
    console.log('CreateNewContent isAlreadyNameExist contents', contents);
    const isOk = !contents.some((content) => content.name === contentName);
    return isOk || 'This name have already been existed.';
  }, [contents]);

  return (
    <div css={container}>
      <h2 css={pageTitle}>Create New Content</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label css={labelStyle} htmlFor="contentName">Name</label>
        <input 
          css={inputBox}
          {...register('contentName', 
            { required: { value: true, message: 'You should fill in this field.' }, 
              maxLength: 100, 
              validate: { isAlreadyNameExist: isAlreadyNameExist } })} />
        <div css={errorStyle}>{errors.contentName?.message}</div>

        <label css={labelStyle} htmlFor="numberOfBlocks">Blocks</label>
        <input 
          css={inputBox}
          {...register('numberOfBlocks', 
            { required: { value: true, message: 'You should fill in this field.' }, 
            min: { value: 0, message: 'You should fill in this field with a number which is equal to or more than 0.' }, 
            max: { value: 1500, message: 'You should fill in this field with a number which is equal to or less than 1500.' },  // TODO: The number 1500 is not considered number. We should consider that how many blocks a content will have.
            pattern: { value: /^[0-9]+$/i, message: 'You should fill in this field with a number.' }})} />
          <div css={errorStyle}>{errors.numberOfBlocks?.message}</div>
        <button 
          type="submit"
          css={buttonStyle}
        >OK</button>
      </form>
      <div css={{ marginBottom: '32px' }}>
        <CreateTagButton />
        <EditSelectedTagsButton />
      </div>
    </div>
  );
};
