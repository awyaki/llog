import { VFC, useCallback, useContext } from 'react';

import { useForm, Validate } from 'react-hook-form';

import { upsertContentBlocks } from '~/api';

import { 
  EnterIcon,
  CancelIcon,
  NotifierContext
} from '~/components';

type Props = {
  id: number;
  maxUnitNumber: number;
  onSubmit?: () => void;
  onClose?: () => void;
};

type Input = {
  newMaxUnitNumber: string;
};

export const ContentBlocksForm: VFC<Props> = ({ 
  id, 
  maxUnitNumber,
  onSubmit,
  onClose
}) => {
  const { 
    register,
    handleSubmit,
  } = useForm<Input>({
    mode: 'onSubmit',
    defaultValues: { newMaxUnitNumber: `${maxUnitNumber}` },
  });

  const { setMessage } = useContext(NotifierContext);
  
  const onSubmitUpsert = useCallback(async ({ newMaxUnitNumber }: Input) => {
    await upsertContentBlocks(id, maxUnitNumber, Number(newMaxUnitNumber) - maxUnitNumber);
    if (onSubmit) {
      onSubmit();
    }
    setMessage('updated!');
  }, [setMessage]);

  const isLarger = useCallback<Validate<string>>((newMaxUnitNumber) => {
    const isOk = maxUnitNumber < Number(newMaxUnitNumber);
    return isOk || 'Input number is larger than the original number.';
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmitUpsert)}>
        <input 
          {...register('newMaxUnitNumber', 
            { required: { value: true, message: 'You should fill in this field.' }, 
            min: { value: 1, message: 'You should fill in this field with a number which is equal to or more than 1.' }, 
            max: { value: 1500, message: `You should fill in this field with a number which is equal to or less than 1500.` },  // TODO: The number 1500 is not considered number. We should consider that how many blocks a content will have.
            pattern: { value: /^[0-9]+$/i, message: 'You should fill in this field with a number.' },
            validate: { isLarger: isLarger } })} />
        <button
          type="submit">
          <EnterIcon />
        </button>
        <button
          type="button"
          onClick={onClose}>
          <CancelIcon />
        </button>
    </form>
  );
};
