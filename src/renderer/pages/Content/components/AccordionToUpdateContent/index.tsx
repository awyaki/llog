import { 
  VFC,
  useState,
  ChangeEventHandler
  } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  inputBox,
  } from '~/pages/style';

import {
  SelectTags,
  NormalButton,
  WarningButton,
  AccordionButtonWithText
} from '~/components';

import { ContentWithRelation } from '~/pages/type';

import {
  colors,
  font
} from '~/styleConfig';


import { useUpdateContent } from './hooks'

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
    isMoreThanEqaulToPreviousNumber
  } = useUpdateContent({ content });
  
  const [searchQuery, setSearchQuery] = useState('');
  
  const onChangeSearchQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

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
              pattern: { value: /^[0-9]+$/i, message: 'You should fill in this field with a number.' },
              validate: { isMoreThanEqaulToPreviousNumber: isMoreThanEqaulToPreviousNumber }
              })} />
            <div css={error}>{errors.numberOfBlocks?.message}</div>
          </form>
          <SelectTags 
            onChangeSearchQuery={onChangeSearchQuery}
            searchQuery={searchQuery}
            isUpdate />
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
      </Collapse>
    </>
  );
};
