import { 
  useState,
  useContext,
  useCallback,
  useEffect
  } from 'react';


import {
  useForm,
  Validate
} from 'react-hook-form';

import { 
  updateContentTags,
  upsertContentBlocks,
  updateContentName
  } from '~/api';


import {
  ContentsContext,
  SelectedTagsContext,
  NotifierContext
} from '~/components';

import { ContentWithRelation } from '~/pages/type';

type Inputs = {
  contentName: string;
  numberOfBlocks: string;
};

type Props = {
  content: ContentWithRelation;
};

export const useUpdateContent = ({ content }: Props) => {

  const [isOpen, setIsOpen] = useState(false);  
  
  const { contents } = useContext(ContentsContext);
  
  const { setMessage } = useContext(NotifierContext);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({ 
    mode: 'onSubmit',
    defaultValues: { 'contentName': content.name, 'numberOfBlocks': content.blocks.length.toString() }
  });

  const { 
    selectedTags,
    setSelectedTags,
    } = useContext(SelectedTagsContext);

  useEffect(() => {
    setSelectedTags(content.tags);
  }, [content]);
 
  const onToggleOpenAndClose = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []); 

  
  const onSubmit = useCallback(async (data: Inputs) => {
    const { contentName, numberOfBlocks } = data;
    // TODD: These function should not call when each item not alter.   
    await updateContentName({ id: content.id, name: contentName });
    await updateContentTags(content.id, selectedTags);
    await upsertContentBlocks(content.id, content.blocks.length, Number(numberOfBlocks) - content.blocks.length);
    
    setSelectedTags([]);
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
    setMessage('updated!');
  }, [selectedTags]);  

  const isAlreadyNameExist = useCallback<Validate<string>>((contentName) => {
    const isOk = !contents
                    .filter(({ id }) => content.id !== id)
                    .some((content) => content.name === contentName);
    return isOk || 'This name have already been existed.';
  }, [contents]);
  
  const isMoreThanEqaulToPreviousNumber = useCallback<Validate<string>>((numberOfBlocks) => {
    return Number(numberOfBlocks) > content.blocks.length || 'You should update the number to more than previous number.'
  }, []);

  const onClearAllInput = useCallback(() => {
    setSelectedTags([]);
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
  }, []);

  
  const handleSubmitUpdation = handleSubmit(onSubmit);

  return {
    isOpen,
    register,
    errors,
    onToggleOpenAndClose,
    handleSubmitUpdation,
    onClearAllInput,
    isAlreadyNameExist,
    isMoreThanEqaulToPreviousNumber
  };
};
