import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { menuButton } from './style';

import { useMenu } from './hooks';

import { 
  HomeIcon,
  LogsIcon,
  BackIcon,
  ForwardIcon,
  TagsIcon
} from '../Icons';


type Props = {
  confirmer?: () => boolean;
};

export const Menu: VFC<Props> = ({ confirmer }) => {
  const {
    onClickBack,
    onClickForward,
    onClickHome,
    onClickLogs,
    onClickTags
  } = useMenu(confirmer);

  return (
    <div css={{ 
        height: '100vh',
        position: 'sticky',
        display: 'flex',
        top: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '90px', 
        padding: '90px 16px 16px 16px', 
        backgroundColor: colors.cyan.DEFAULT,
        marginRight: '8px',
      }}>
      <button
        onClick={onClickBack}
        css={{ ...menuButton, marginBottom: '16px' }}>
        <BackIcon />
      </button>
      <button
        onClick={onClickForward}
        css={{ ...menuButton, marginBottom: '32px' }}>
        <ForwardIcon />
      </button>
      <button 
        onClick={onClickHome}
        css={{ ...menuButton, marginBottom: '16px' }}>
        <HomeIcon />
      </button>
      <button 
        onClick={onClickLogs}
        css={{ ...menuButton, marginBottom: '16px'}}>
        <LogsIcon />
      </button>
      <button 
        onClick={onClickTags}
        css={menuButton}>
        <TagsIcon />
      </button>
    </div>
  );
};
