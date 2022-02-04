import { 
  VFC,
  useContext,
  } from 'react';

import { colors, font } from '~/styleConfig';

import { Tag } from '@prisma/client';

import { CSSObject } from '@emotion/react';

import { SelectedTagsContext } from '~/components';



const tagStyle: CSSObject = {
  minWidth: '80px',
  textAlign: 'center',
  fontSize: font.size.SS,
  borderRadius: '4px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colors.cyan.DEFAULT,
  backgroundColor: colors.white,
  color: colors.cyan.DEFAULT,
  padding: '2px 4px',
  transition: '.25s',

};

const reverseTagStyle: CSSObject = {
  ...tagStyle,
  borderColor: colors.white,
  backgroundColor: colors.cyan.DEFAULT,
  color: colors.white,

};

type Props = {
  searchQuery: string;
  selectedTags: Tag[];
  onToggleSelectedTags: (tag: Tag) => () => void;
};

export const TagListToSelect: VFC<Props> = ({ 
  searchQuery, 
  selectedTags,
  onToggleSelectedTags,
  }) => {

  const { 
    filterTagsbyUserInput,
    } = useContext(SelectedTagsContext);
  
  const filteredTags = filterTagsbyUserInput(searchQuery); 

  return (
    <ul css={{
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      '> li': {
        marginRight: '4px',
        marginBottom: '4px',
      },
    }}>
      {filteredTags.map(({ id, name }) => 
                          <li key={id}>
                              <button 
                                onClick={onToggleSelectedTags({ id, name })}
                                css={selectedTags.some((tag) => tag.id === id) ? reverseTagStyle : tagStyle}
                              >{name}</button>
                          </li>)}
    </ul>
  );
};
