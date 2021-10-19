import { VFC, Dispatch, SetStateAction } from 'react';
import AddTagsButton from './AddTagsButton/AddTagsButton';
import DeleteTagsButton from './DeleteTagsButton/DeleteTagsButton';
import { itemContainer, makeTextBoxStyle } from './style';
import { ThemeColor } from '../ThemeProvider/type';
import { CSSObject } from '@emotion/react';
import { colors } from '../../styleConfig/colors';


type Props = {
  theme: ThemeColor;
  tags: { id: number, name: string }[],
  setTags: Dispatch<SetStateAction<{ id: number, name: string }[]>>;
  css?: CSSObject;
};

const TagItems: VFC<Props> = ({ theme, tags, setTags, ...rest }) => {
  return (
    <div className="itemContainer" css={itemContainer} {...rest}>
      <h2 
        css={{ color: colors.text }}
        className="title"
      >Tags</h2>
       <div css={{ maxHeight: '20vh', overflow: 'scroll', marginBottom: '10px' }}>
       {tags.map((tag) => 
          <div 
            key={tag.id}
            css={{ display: 'flex', alignItems: 'flex-start' }}
          >
            <input 
              css={{...makeTextBoxStyle(theme), marginBottom: '16px', color: colors.text }}
              required
              value={tag.name}
              onChange={(e) => {
                setTags((prevTags) => {
                  return prevTags
                    .map((prevTag) => prevTag.id === tag.id 
                                    ? { id: tag.id, name: e.target.value } 
                                    :  prevTag);
                });
              }}
            />
            <DeleteTagsButton 
              id={tag.id} 
              css={{ marginLeft: '10px', marginTop: '5px' }}
              setTags={setTags}
            />
          </div>
          )}
       </div>
       <AddTagsButton
        setTags={setTags}
       />
    </div>
  );
};

export default TagItems;
