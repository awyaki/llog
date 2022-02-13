import { 
  VFC, 
  useState,
  useContext,
  useCallback,
  ChangeEventHandler
  } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  inputBox,
  } from '~/pages/style';

import {
  SelectTags,
  SelectedTagsContext,
  NotifierContext,
  NormalButton,
  WarningButton,
  AccordionButtonWithText
} from '~/components';

import {
  colors,
  font
} from '~/styleConfig';


import { useForm, Validate } from 'react-hook-form';

import { useCreateContent } from './hooks'

import { Collapse } from '@chakra-ui/transition';


const error: CSSObject = {
  height: '32px',
  color: colors.red.DEFAULT,
  fontSize: font.size.SS,
};


type Inputs = {
  contentName: string;
  numberOfBlocks: string;
};



export const AccordionToCreateContent: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenSelectTgs, setIsOpenSelectTags] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
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
    onToggleSelectedTags,
    } = useContext(SelectedTagsContext);
  
  const onSubmit = useCallback(async (data: Inputs) => {
    const { contentName, numberOfBlocks } = data;
    await onCreateNewContent(contentName, selectedTags, Number(numberOfBlocks));
    setSelectedTags([]);
    setSearchQuery('');
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
    setMessage('Create');
    setIsOpen(false);
  }, [selectedTags]);  

  const isAlreadyNameExist = useCallback<Validate<string>>((contentName) => {
    const isOk = !contents.some((content) => content.name === contentName);
    return isOk || 'This name have already been existed.';
  }, [contents]);

  const onClearAllInput = useCallback(() => {
    setSelectedTags([]);
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
  }, []);

  const onToggleOpenAndClose = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  
  const onChangeSearchQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const toggleIsOpenSelectTags = useCallback(() => {
    setIsOpenSelectTags((p) => !p);
  }, []);

  return (
    <>
      <AccordionButtonWithText 
        css={{ marginBottom: '16px' }}
        isOpen={isOpen}
        text="Add new"
        onClick={onToggleOpenAndClose}/>
      <Collapse in={isOpen}>
        <div css={{
          padding: '16px',
          border: `1px solid ${colors.cyan.DEFAULT}`,
          borderRadius: '4px',
          marginBottom: '16px',
        }}>
        <form 
          id="content-create" 
          onSubmit={handleSubmit(onSubmit)}>
            <label 
              css={{
                display: 'block',
              }}
              htmlFor="contentName">
                Name</label>
            <input 
              css={inputBox}
              {...register('contentName', 
                { required: { value: true, message: 'You should fill in this field.' }, 
                  maxLength: 100, 
                  validate: { isAlreadyNameExist: isAlreadyNameExist } })} />
          <div css={error}>{errors.contentName?.message}</div>

          <label 
            css={{
              display: 'block',
            }} 
            htmlFor="numberOfBlocks">Blocks</label>
          <input 
            css={inputBox}
            {...register('numberOfBlocks', 
              { required: { value: true, message: 'You should fill in this field.' }, 
              min: { value: 1, message: 'You should fill in this field with a number which is more than 0.' }, 
              max: { value: 1500, message: 'You should fill in this field with a number which is equal to or less than 1500.' },  // TODO: The number 1500 is not considered number. We should consider that how many blocks a content will have.
              pattern: { value: /^[0-9]+$/i, message: 'You should fill in this field with a number.' }})} />
            <div css={error}>{errors.numberOfBlocks?.message}</div>
          </form>
          <SelectTags 
            isOpen={isOpenSelectTgs}
            toggleIsOpen={toggleIsOpenSelectTags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            onToggleSelectedTags={onToggleSelectedTags}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onChangeSearchQuery={onChangeSearchQuery} />
          <NormalButton 
            css={{ width: '84px', marginRight: '8px' }}
            form="content-create"
            type="submit">
            Create
          </NormalButton>
          <WarningButton 
            css={{ width: '84px' }}
            onClick={onClearAllInput}
            type="button">
            Clear
          </WarningButton>
        </div>
      </Collapse>
    </>
  );
};
