import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { ThemeColor } from '../ThemeProvider/type';
import { colors } from '../../styleConfig/colors';

type Props = {
  css?: CSSObject;
  theme: ThemeColor; 
};

const AddIcon: VFC<Props> = ({ theme, ...rest }) => {
  return (
    <div css={{ textAlign: 'center' }} {...rest}>
    <svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="ログ" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="コンテンツ一覧" transform="translate(-189.000000, -782.000000)" fill={colors[theme].DEFAULT} fillRule="nonzero">
            <g id="Group" transform="translate(157.000000, 776.000000)">
                <g id="add_black_24dp" transform="translate(26.000000, 0.000000)">
                    <polygon id="Path" points="23 15.7142857 15.7142857 15.7142857 15.7142857 23 13.2857143 23 13.2857143 15.7142857 6 15.7142857 6 13.2857143 13.2857143 13.2857143 13.2857143 6 15.7142857 6 15.7142857 13.2857143 23 13.2857143"></polygon>
                </g>
            </g>
        </g>
      </g>
    </svg>
    </div>
  );
};

export default AddIcon;
