import { VFC, useContext, useCallback } from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerProps,
} from '@chakra-ui/react'

import {
  SelectedTagsList,
  SelectedTagsContext,
  NotifierContext,
  NormalButton,
  WarningButton
} from '~/components';

import {
  inputBox,
  errorStyle,
  labelStyle,
} from './style';


import { useForm, Validate } from 'react-hook-form';

import { useCreateContent } from './hooks'

type Inputs = {
  contentName: string;
  numberOfBlocks: string;
};

export const DrawerToCreateContent: VFC<Omit<DrawerProps, 'children'>> = ({
  isOpen,
  onClose
}) => {
  const { 
    contents,
    onCreateNewContent,
  } = useCreateContent();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({ 
    mode: 'onSubmit',
    defaultValues: { 'contentName': '', 'numberOfBlocks': '' }
  });
  
  const { setMessage } = useContext(NotifierContext);

  const { 
    selectedTags,
    setSelectedTags,
    } = useContext(SelectedTagsContext);
  
  const onSubmit = useCallback(async (data: Inputs) => {
    const { contentName, numberOfBlocks } = data;
    await onCreateNewContent(contentName, selectedTags, Number(numberOfBlocks));
    setSelectedTags([]);
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
    setMessage('A new Contet is created.');
  }, [selectedTags]);  

  const isAlreadyNameExist = useCallback<Validate<string>>((contentName) => {
    console.log('CreateNewContent isAlreadyNameExist contents', contents);
    const isOk = !contents.some((content) => content.name === contentName);
    return isOk || 'This name have already been existed.';
  }, [contents]);

  const onCloseWithReset = useCallback(() => {
    onClose();
    setSelectedTags([]);
    setValue('contentName', '');
    setValue('numberOfBlocks', '');
  }, []);

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
      <DrawerHeader>Create Content</DrawerHeader>
      <DrawerBody>

        <form id="content-create" onSubmit={handleSubmit(onSubmit)}>
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

          <div css={{ marginBottom: '32px' }}>
            <h2 css={labelStyle}>Tags</h2>
            <SelectedTagsList />
          </div>

        </form>
      </DrawerBody>
      <DrawerFooter>
          <NormalButton
            css={{ marginRight: '8px' }}
            type="submit"
            form="content-create">
            Create
          </NormalButton>
          <WarningButton
          onClick={onCloseWithReset}>
            Cancel
          </WarningButton>
      </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
