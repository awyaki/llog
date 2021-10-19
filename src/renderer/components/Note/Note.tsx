import { VFC, useContext } from 'react';
import { CSSObject } from '@emotion/react';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { Note as NoteType } from './type';
import { font } from '../../styleConfig/font';
import { colors } from '../../styleConfig/colors';
import { blocksContainer, tagsContainer, makeControlPanelStyle } from './style';
import Tag from '../Tag/Tag';
import Block from '../Block/Block';
import CommitButton from '../CommitButton/CommitButton';
import EditNoteButton from '../EditNoteButton/EditNoteButton';
import { makeTimeString } from '../../utils/functions';

type Props = {
  note: NoteType; 
  css?: CSSObject;
};

const Note: VFC<Props> = ({ note, ...rest }) => {
  const { contentsName, blocks, body, tags, modifiedAt } = note;
  const { theme } = useContext(ThemeContext);
  return (
    <div {...rest}>
        <div css={{ marginBottom: '16px' }}>
          <span
            css={{ display: 'block', color: colors.text, fontSize: font.size.SS, marginBottom: '10px' }}
          >{makeTimeString(modifiedAt)}</span>
          <h2 css={{ color: colors.text, fontSize: font.size.M, marginBottom: '18px' }}>
            {contentsName}
          </h2>
          <div css={makeControlPanelStyle(theme)}>
            <CommitButton theme={theme} /> 
            <EditNoteButton theme={theme} /> 
          </div>
          <div css={blocksContainer}>
            {blocks.map((block) => <Block
                                    disabled
                                    key={block.id}
                                    id={block.id}
                                    isSelected={false}
                                    className="block"
                                    level={block.level}
                                    unit={block.unit}
                                    />)} 
          </div>
        </div>
        <div css={tagsContainer}>
          {tags.map((tag) => <Tag 
                              key={tag.id}
                              className="tag"
                              name={tag.name} 
                              />)}
        </div>
        <div
          css={{ color: colors.text, lineHeight: '1.8rem' }}
        >{body}</div>
    </div>
  );
};

export default Note;
