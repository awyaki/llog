import { VFC } from 'react';
import AppFrame from '../../AppFrame/AppFrame';
import ControlPanelContainer from '../../ControlPanelContainer/ControlPanelContainer';
import Block from '../../Block/Block';
import Tag from '../../Tag/Tag';
import EditTagsButton from '../EditTagsButton/EditTagsButton';
import EditBlocksButton from '../EditBlocksButton/EditBlocksButton';
import SaveButton from './SaveButton/SaveButton';
import PreviewButton from './PreviewButton/PreviewButton';
import OneMoreButton from './OneMoreButton/OneMoreButton';
import BackContentsButton from './BackContentsButton/BackContentsButton';
import { Contents } from '../../Contents/type';
import { BlockType } from '../../Block/type';
import { blocksContainer, tagsContainer } from './style';

import { font } from '../../../styleConfig/font';
import { colors } from '../../../styleConfig/colors';


type Props = {
  blocks: BlockType[];
  contents: Contents;
  tags: { id: number, name: string }[]; 
};



const EditNote: VFC<Props> = ({ contents, blocks, tags }) => {

  return (
    <div>
      <AppFrame pageName="Add Notes">
        <div css={{ marginBottom: '16px' }}>
          <h2 css={{ color: colors.text, fontSize: font.size.M, marginBottom: '18px' }}>
            {contents.name}
          </h2>
          <div css={blocksContainer}>
            {blocks.map((block) => <Block
                                    disabled
                                    key={block.id}
                                    className="block"
                                    id={block.id}
                                    level={block.level}
                                    unit={block.unit}
                                    isSelected={false}
                                    />)} 
            <EditBlocksButton />
          </div>
        </div>
        <div css={tagsContainer}>
          {tags.map((tag) => <Tag 
                              key={tag.id}
                              className="tag"
                              name={tag.name} 
                            />)}
          <EditTagsButton />
        </div>
      </AppFrame>
      <ControlPanelContainer>
        <BackContentsButton contentsId={contents.id}/>
        <SaveButton />
        <PreviewButton />
        <OneMoreButton />
      </ControlPanelContainer>
    </div>
  );
};

export default EditNote;
