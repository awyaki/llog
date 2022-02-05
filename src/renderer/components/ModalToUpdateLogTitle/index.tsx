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
  } from '@chakra-ui/react';

export * from './ModalToUpdateLogTitleContextProvider';

type Props = {
  onUpdateLogTilte: (title: string) => void;
} & Omit<ModalProps, 'children'>;

export const ModalToUpdateLogTitle: VFC<Props> = ({ 
  onUpdateLogTilte,
  onClose,
  ...rest
  }) => {

  const [title, setTitle] = useState('');

  const onCloseModal = () => {
    setTitle('');
    onClose();
  };

  const onUpdateLogTilteWithResetModal = () => {
    onUpdateLogTilte(title === '' ? 'No title' : title);
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
          <form onSubmit={(e) => { 
            e.preventDefault();
            onUpdateLogTilteWithResetModal();
            }}>
          <input 
            css={{
              width: '400px',
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
              type="submit"
              css={{
                marginRight: '8px',
              }}>
              Update
            </NormalButton>
            <WarningButton 
              type="button"
              onClick={onCloseModal}>
              Cancel
            </WarningButton>
          </div>
          </form>
      </ModalContent>
    </Modal>
  )
};
