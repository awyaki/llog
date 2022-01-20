import { VFC, useCallback, useContext } from 'react';

import { Validate } from 'react-hook-form';

import { 
  inputBox, 
  errorStyle,
} from './style';

import { updateContentName, getAllContent } from '~/api';

import { useForm } from 'react-hook-form';

import { 
  ContentsContext, 
  NotifierContext,
  EnterIcon,
} from '~/components';

type Props = {
  id: number;
  defaultName: string;
  onSubmit?: () => void;
};

type Input = {
  name: string;
};

export const ContentNameForm: VFC<Props> = ({ id, defaultName, onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Input>({ 
    mode: 'onSubmit',
    defaultValues: { name: defaultName }
  });

  
  const { setMessage } = useContext(NotifierContext);
  const { contents, setContents } = useContext(ContentsContext);

  const onSubmitContentName = useCallback(async ({ name }: Input) => {
    await updateContentName({ id, name })
    const updatedContents = await getAllContent();
    if (onSubmit !== undefined) {
      onSubmit();
    }
    setContents(updatedContents);
    setMessage('updated!');
    setValue('name', '');
  }, [onSubmit, setContents, setMessage, setValue]);

  const isAlreadyNameExist = useCallback<Validate<string>>((contentName) => {
    const isOk = !contents.some((content) => content.name === contentName);
    return isOk || 'This name have already been existed.';
  }, [contents]);

  return (
    <form onSubmit={handleSubmit(onSubmitContentName)}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <input 
          css={{ ...inputBox, marginRight: '8px' }}
          {...register('name', 
            { required: { value: true, message: 'You should fill in this field.' }, 
              maxLength: 100, 
              validate: { isAlreadyNameExist: isAlreadyNameExist } })} />
        <button type="submit">
          <EnterIcon />
        </button>
      </div>
      <div css={errorStyle}>{errors.name?.message}</div>
    </form>
  );
};
