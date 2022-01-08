import { VFC, useContext, useEffect, useState, useCallback } from 'react';

import { createTag } from '~/api';

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
    formState: { errors }
  } = useForm<Input>({ defaultValues: { newTagName: '' } });

  const { 
    isOpenModalToCreateTag, 
    onCloseModalToCreateTag
  } = useContext(SelectedTagsContext);

  const onCreateTag = useCallback(() => {
    console.log('ModalToCreateTag');
  }, []);
  
  return (
   <Modal isOpen={isOpenModalToCreateTag} onClose={onCloseModalToCreateTag}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onCreateTag)}>
              <input {...register('newTagName', { required: { value: true, message: 'You should fill in this field.'} })} />
              <div>{errors.newTagName?.message}</div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>   
  );
};
