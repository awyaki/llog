import { 
  VFC,
  useState,
  ChangeEventHandler,
  useContext,
  useCallback
  } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  inputBox,
  } from '~/pages/style';

import {
  SelectTags,
  NormalButton,
  WarningButton,
  AccordionButtonWithText,
  DisabableNormalButton,
  Switch,
} from '~/components';

import { ContentWithRelation } from '~/pages/type';

import { SelectedTagsContext } from '~/components';

import {
  colors,
  font
} from '~/styleConfig';


import { useUpdateContent } from './hooks'

import { Collapse } from '@chakra-ui/transition';

type DeleteButtonProps = {
  css?: CSSObject;
  isDisable: boolean;
  onToggleIsDisable: () => void;
  onDeleteContent: () => void;
};

const DeleteButton: VFC<DeleteButtonProps> = ({ 
  isDisable,
  onToggleIsDisable,
  onDeleteContent,
  ...rest
  }) => {


  return (
    <div css={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }} {...rest}>
      <DisabableNormalButton
        css={{ marginRight: '16px' }}
        colorOptions={{
          primary: colors.red.DEFAULT,
          secondary: colors.white
        }}
        text="Delete"
        isDisable={isDisable}
        onClick={onDeleteContent} />
      <Switch 
        color={colors.red.DEFAULT}
        isOn={!isDisable} 
        onClick={onToggleIsDisable} />
    </div>
  );
};




const error: CSSObject = {
  height: '32px',
  color: colors.red.DEFAULT,
  fontSize: font.size.SS,
};



type Props = {
  content: ContentWithRelation;
};

export const AccordionToUpdateContent: VFC<Props> = ({ content }) => {

  const { 
    isOpen,
    register,
    errors,
    onToggleOpenAndClose,
    handleSubmitUpdation,
    onCancelUpdate,
    isAlreadyNameExist,
    isMoreThanEqaulToPreviousNumber,
    isDisable,
    onToggleIsDisable,
    onDeleteContent,
  } = useUpdateContent({ content });
  
  const { selectedTags, setSelectedTags, onToggleSelectedTags } = useContext(SelectedTagsContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpenSelectTgs, setIsOpenSelectTags] = useState(false);
  
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
        text="Update"
        onClick={onToggleOpenAndClose}/>
      <Collapse in={isOpen}>
        <div css={{
          padding: '16px',
          border: `1px solid ${colors.cyan.DEFAULT}`,
          borderRadius: '4px',
          marginBottom: '16px',
        }}>
        <form 
          id="content-update" 
          onSubmit={handleSubmitUpdation}>
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
              pattern: { value: /^[0-9]+$/i, message: 'You should fill in this field with a number.' },
              validate: { isMoreThanEqaulToPreviousNumber: isMoreThanEqaulToPreviousNumber }
              })} />
            <div css={error}>{errors.numberOfBlocks?.message}</div>
          </form>
          <SelectTags 
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            onToggleSelectedTags={onToggleSelectedTags}
            setSearchQuery={setSearchQuery}
            onChangeSearchQuery={onChangeSearchQuery}
            searchQuery={searchQuery} />

          <div css={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: `1px solid ${colors.red.DEFAULT}` }}>
            <NormalButton 
              css={{ width: '90px', marginRight: '8px' }}
              form="content-update"
              type="submit">
              Update
            </NormalButton>

            <WarningButton 
              css={{ width: '84px' }}
              onClick={onCancelUpdate}
              type="button">
              Cancel
            </WarningButton>
          </div>
          <DeleteButton 
            isDisable={isDisable}
            onDeleteContent={onDeleteContent} 
            onToggleIsDisable={onToggleIsDisable} />
        </div>
      </Collapse>
    </>
  );
};
