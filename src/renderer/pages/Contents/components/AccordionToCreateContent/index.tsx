import { 
  VFC, 
  useState,
  useContext,
  useCallback
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

const labelStyle: CSSObject = {
  width: '50px',
  marginRight: '8px',
};

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

  const onClearAllInput = useCallback(() => {
    setSelectedTags([]);
    setValue('numberOfBlocks', '');
    setValue('contentName', '');
  }, []);

  const onToggleOpenAndClose = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <AccordionButtonWithText 
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
              css={labelStyle}
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
            css={labelStyle} 
            htmlFor="numberOfBlocks">Blocks</label>
          <input 
            css={inputBox}
            {...register('numberOfBlocks', 
              { required: { value: true, message: 'You should fill in this field.' }, 
              min: { value: 0, message: 'You should fill in this field with a number which is equal to or more than 0.' }, 
              max: { value: 1500, message: 'You should fill in this field with a number which is equal to or less than 1500.' },  // TODO: The number 1500 is not considered number. We should consider that how many blocks a content will have.
              pattern: { value: /^[0-9]+$/i, message: 'You should fill in this field with a number.' }})} />
            <div css={error}>{errors.numberOfBlocks?.message}</div>
          </form>
          <SelectTags />
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
