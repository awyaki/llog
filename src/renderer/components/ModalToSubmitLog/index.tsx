import { 
  VFC,
  useState
  } from 'react';

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
  ModalBody,
  ModalFooter,
  } from '@chakra-ui/react';

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

  return (
    <Modal onClose={onCloseModal} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <h2 css={{ marginBottom: '8px' }}>Log title</h2>
          <input 
            css={{
              width: '200px',
              borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
            }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <NormalButton onClick={() => onSubmitLog(title)}>
            Submit
          </NormalButton>
          <WarningButton 
            onClick={onCloseModal}>
            Cancel
          </WarningButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
};
