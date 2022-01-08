import { VFC, useContext, useCallback } from 'react';

import { NotifierContext } from '~/components';

import { inputBox, warning } from '~/pages/style';

import { buttonStyle } from './style';

import { createTag, getAllTag } from '~/api';

import { useForm } from 'react-hook-form';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
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
    setTags,
    isOpenModalToCreateTag, 
    onCloseModalToCreateTag
  } = useContext(SelectedTagsContext);

  const { setMessage } = useContext(NotifierContext);

  const onCreateTag = useCallback(async (data: Input) => {
    const { newTagName } = data;
    await createTag(newTagName);
    const allTags = await getAllTag();
    setTags(allTags);
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
            <form onSubmit={handleSubmit(onCreateTag)}>
              <input css={inputBox} {...register('newTagName', { required: { value: true, message: 'You should fill in this field.'} })} />
              <div css={warning}>{errors.newTagName?.message}</div>
              <button 
                css={buttonStyle}
                type="submit"
              >OK</button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>   
  );
};
