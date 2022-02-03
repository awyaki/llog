import { 
  VFC,
  useState
  } from 'react';

import { once } from '~/utils';

import { 
  NormalButton,
  WarningButton
  } from '~/components';

import { colors, font } from '~/styleConfig';

import { 
  Modal,
  ModalProps,
  ModalContent,
  ModalOverlay,
  } from '@chakra-ui/react';

export * from './ModalToSubmitLogContextProvider';

type Props = {
  onSubmitLog: (title: string) => void;
} & Omit<ModalProps, 'children'>;

export const ModalToSubmitLog: VFC<Props> = ({ 
  onSubmitLog,
  onClose,
  ...rest
  }) => {

  const [title, setTitle] = useState('');

  const onCloseModal = () => {
    setTitle('');
    onClose();
  };

  const onSubmitLogWithResetModal = () => {
    onSubmitLog(title);
    setTitle('');
    onClose();
  };

  return (
    <Modal onClose={onCloseModal} {...rest}>
      <ModalOverlay />
      <ModalContent css={{
        color: colors.text,
        padding: '16px',
      }}>
          <h2 css={{ 
            marginBottom: '24px', 
            fontSize: font.size.M,
            }}>Log title</h2>
          <input 
            css={{
              width: '200px',
              borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
              marginBottom: '24px',
            }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <div css={{
            display: 'flex',
          }}>
            <NormalButton 
              css={{
                marginRight: '8px',
              }}
              onClick={once(onSubmitLogWithResetModal)}>
              Submit
            </NormalButton>
            <WarningButton 
              onClick={onCloseModal}>
              Cancel
            </WarningButton>
          </div>
      </ModalContent>
    </Modal>
  )
};
