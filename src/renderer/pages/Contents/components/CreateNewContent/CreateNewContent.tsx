import { VFC, useState, MouseEventHandler, useCallback } from 'react';

import { Tag, Content } from '@prisma/client';

import { container } from './style/container';

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
    formState: { errors }
  } = useForm<Inputs>({ 
    defaultValues: { 'contentName': '', 'numberOfBlocks': '' }
  });

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  
  const onSubmit = useCallback(async (data: Inputs) => {
    const { contentName, numberOfBlocks } = data;
    await onCreateNewContent(contentName, selectedTags, Number(numberOfBlocks));

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
        <input 
          css={{ border: '1px solid black' }}
          {...register('contentName', 
            { required: { value: true, message: 'A Name of a new content is required.' }, 
              maxLength: 100, 
              validate: { isAlreadyNameExist: isAlreadyNameExist } })} />
        {errors.contentName && <span>{errors.contentName?.message}</span>}
        <input css={{ border: '1px solid black' }} {...register('numberOfBlocks', { required: true, min: 0, max: 1500, pattern: /^[0-9]+$/i })} />
        {errors.numberOfBlocks?.type === 'required' && <span>This field is required.</span>}
        {errors.numberOfBlocks?.type === 'min' && <span>Number of Blocks is equal to or more than 0.</span>}
        {errors.numberOfBlocks?.type === 'max' && <span>Number of Blocks is equal to or less than 1500.</span>}
        {errors.numberOfBlocks?.type === 'pattern' && <span>This field is required number strings.</span>}
        <button type="submit">OK</button>
      </form>
    </div>
  );
};
