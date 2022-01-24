import { VFC, useContext, useCallback } from 'react';

import { 
  NotifierContext,
  NormalButton,
  WarningButton
} from '~/components';

import { inputBox, warning } from '~/pages/style';

import { buttonStyle } from './style';

import { createTag, getAllTag } from '~/api';

import { useForm, Validate } from 'react-hook-form';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from '@chakra-ui/react'


type Input = {
  newTagName: string;
};

export const ModalToCreateTag: VFC = () => {
  const { 
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Input>({ defaultValues: { newTagName: '' } });

  const { 
    tags,
    setSelectedTags,
    setTagsAction,
    isOpenModalToCreateTag, 
    onCloseModalToCreateTag
  } = useContext(SelectedTagsContext);

  const { setMessage } = useContext(NotifierContext);

  const isAlreadyNameExist = useCallback<Validate<string>>((tagName) => {
    const isOk = !tags.some((tag) => tag.name === tagName);
    return isOk || 'This name have already been existed.';
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
   <Modal isOpen={isOpenModalToCreateTag} onClose={onCloseModalToCreateTag}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="create-tag" onSubmit={handleSubmit(onCreateTag)}>
              <input css={inputBox} {...register('newTagName', { required: { value: true, message: 'You should fill in this field.'}, validate: { isAlreadyNameExist } })} />
              <div css={warning}>{errors.newTagName?.message}</div>
            </form>
          </ModalBody>
          <ModalFooter>
            <NormalButton 
              css={{ marginRight: '8px' }}
              form="create-tag"
              type="submit">
              Create
            </NormalButton>
            <WarningButton onClick={onCloseModalToCreateTag}>
              Cancel
            </WarningButton>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  );
};
