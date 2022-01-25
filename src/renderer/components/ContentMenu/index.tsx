import { VFC } from 'react';

import { InfoButton } from '../Buttons';

import { colors } from '~/styleConfig';

type Props = {
  confirmer?: () => boolean;
};

export const ContentMenu: VFC<Props> = ({ confirmer }) => {

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
        backgroundColor: colors.cyan.SECOND,
      }}>
      <InfoButton 
        css={{ 
          backgroundColor: colors.cyan.SECOND,
          '&:hover, &:focus': {
            color: colors.cyan.SECOND
          }
          }} />
    </div>
  );
};
