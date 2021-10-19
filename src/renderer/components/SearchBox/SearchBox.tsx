import { VFC, useState } from 'react';
import { useContext } from 'react';
import SearchIcon from './SearchIcon/SearchIcon';
import { CSSObject } from '@emotion/react';
import { makeBoxStyle, container } from './style';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

type Props = {
  css?: CSSObject; 
};

const SearchBox: VFC<Props> = ({ ...rest }) => {
  const { theme } = useContext(ThemeContext);
  const [text, setText] = useState('');
  return (
    <form css={container} {...rest}>
      <input 
        css={makeBoxStyle(theme)} 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBox;
