import { 
  useState,
  useContext,
  useCallback,
  useEffect,
  ChangeEventHandler
  } from 'react';

import { useHistory } from 'react-router-dom';

import { getContent } from '~/api';

import { arrayeEqualWithId } from '~/utils';

import {
  useForm,
  Validate
} from 'react-hook-form';

import { 
  updateContentTags,
  deleteConnectContentTags,
  upsertContentBlocks,
  updateContentName,
  deleteContent,
  } from '~/api';


import {
  ContentContext,
  ContentsContext,
  SelectedTagsContext,
  NotifierContext,
} from '~/components';


import { ContentWithRelation } from '~/pages/type';

type Inputs = {
  contentName: string;
  numberOfBlocks: string;
};

type Props = {
  content: ContentWithRelation;
  onSubmit?: () => void;
};

export const useUpdateContentForm = ({ content, onSubmit }: Props) => {

  const { contents } = useContext(ContentsContext);

  const { setContent } = useContext(ContentContext);
  
  const { setMessage } = useContext(NotifierContext);

  const [isDisable, setIsDisable] = useState(true);
  
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState('');
  
  const handleChangeSearchQuery: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, [setSearchQuery]);
  
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
    onToggleSelectedTags: handleToggleSelectedTags
    } = useContext(SelectedTagsContext);

  useEffect(() => {
    setSelectedTags(content.tags);
  }, [content]);
 

  
  const _onSubmit = useCallback(async (data: Inputs) => {
    const { contentName, numberOfBlocks } = data;
    
    // TODD: These function should not call when each item not alter.   
    if (content.name !== contentName) await updateContentName({ id: content.id, name: contentName });
    if (!arrayeEqualWithId(content.tags, selectedTags)) {
      await deleteConnectContentTags(content.id);
      await updateContentTags(content.id, selectedTags);
    }


    const currentBlocks = Number(content.blocks.length);
    const inputBlocks = Number(numberOfBlocks);
    const appendBlocks = inputBlocks - currentBlocks;

    if (appendBlocks > 0) await upsertContentBlocks(content.id, content.blocks.length, appendBlocks);
    
    const updatedContent = await getContent(content.id);
    if (onSubmit !== undefined) onSubmit();
    setContent(updatedContent);
    setSelectedTags([]);
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
    setMessage('Update');
    setIsDisable(true);
  }, [selectedTags, content]);  

  const isAlreadyNameExist = useCallback<Validate<string>>((contentName) => {
    const isOk = !contents
                    .filter(({ id }) => content.id !== id)
                    .some((content) => content.name === contentName);
    return isOk || 'This name have already been existed.';
  }, [contents]);
  
  const isMoreThanEqaulToPreviousNumber = useCallback<Validate<string>>((numberOfBlocks) => {
    return Number(numberOfBlocks) >= content.blocks.length || `You should update the number to more than the previous one, ${content.blocks.length} or remain.`
  }, [content]);

  const handleCancelUpdate = useCallback(() => {
    setIsDisable(true);
    setSelectedTags([]);
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
  }, []);

  
  const handleSubmitUpdate = handleSubmit(_onSubmit);

  const handleToggleIsDisable = useCallback(() => {
    setIsDisable((p) => !p);
  }, []);
  
  const handleDeleteContent = useCallback(async () => {
    await deleteContent(content.id); 
    setMessage('Delete');
    history.push('/');
  }, [history, content]);

  return {
    register,
    errors,
    handleSubmitUpdate,
    handleCancelUpdate,
    isAlreadyNameExist,
    isMoreThanEqaulToPreviousNumber,
    isDisable,
    handleToggleIsDisable,
    handleDeleteContent,
    searchQuery,
    setSearchQuery,
    selectedTags,
    setSelectedTags,
    handleToggleSelectedTags
    handleChangeSearchQuery
  };
};
