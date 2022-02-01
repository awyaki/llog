import { 
  useState,
  useContext,
  useCallback,
  useEffect
  } from 'react';

import { getContent } from '~/api';

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
  ContentContext,
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

  const { setContent } = useContext(ContentContext);
  
  const { setMessage } = useContext(NotifierContext);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({ 
    mode: 'onSubmit',
    defaultValues: { 'contentName': '', 'numberOfBlocks': '' }
  });

  const { 
    selectedTags,
    setSelectedTags,
    } = useContext(SelectedTagsContext);

  useEffect(() => {
    setSelectedTags(content.tags);
  }, [content]);
 
  const onToggleOpenAndClose = useCallback(() => {
    setIsOpen((isOpen) => {
      if (isOpen) {
        setSelectedTags([]);
        setValue('contentName', '');
        setValue('numberOfBlocks', '');
        return !isOpen; 
      } else {
        setSelectedTags(content.tags);
        setValue('contentName', content.name);
        setValue('numberOfBlocks', content.blocks.length.toString());
        return !isOpen;
      }
    });
  }, [content]); 

  
  const onSubmit = useCallback(async (data: Inputs) => {
    const { contentName, numberOfBlocks } = data;
    // TODD: These function should not call when each item not alter.   
    await updateContentName({ id: content.id, name: contentName });
    await updateContentTags(content.id, selectedTags);
    await upsertContentBlocks(content.id, content.blocks.length, Number(numberOfBlocks) - content.blocks.length);
    
    const updatedContent = await getContent(content.id);
    setContent(updatedContent);
    setSelectedTags([]);
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
    setMessage('updated!');
    setIsOpen(false);
  }, [selectedTags, content]);  

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
    isMoreThanEqaulToPreviousNumber,
  };
};
