import { VFC, useCallback } from 'react';

import { useForm } from 'react-hook-form';

import { } from '~/api';

type Props = {
  id: number;
  maxUnitNumber: number;
};

type Input = {
  newMaxUnitNumber: number;
};

export const ContentBlocksForm: VFC<Props> = ({ id, maxUnitNumber }) => {
  const { 
    register,
    handleSubmit,
    setValue
  } = useForm<Input>({
    mode: 'onSubmit',
    defaultValues: { newMaxUnitNumber: maxUnitNumber },
  });
  
  const onSubmit = useCallback(() => {

  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    </form>
  );
};
