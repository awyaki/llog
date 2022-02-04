import { 
  VFC,
  useState,
  useContext,
  useCallback,
  } from 'react';

import { useHistory } from 'react-router-dom';

import { colors, font } from '~/styleConfig';

import { makeFormalTimeString } from '~/utils';

import { LogWithRelation } from '~/pages/type';

import { Collapse } from '@chakra-ui/transition';

import { 
  TagsList,
  MiniBlockList,
  BlockList,
  NormalButton,
  SquareButton,
  CommitIcon,
  EditNoteIcon,
  ModalToSubmitLogContext,
  LogContext,
  MarkdownForHandleNoteContext,
  SelectedBlocksForHandleNoteContext,
  SelectedTagsContext
  } from '~/components';

import 'zenn-content-css';

import { 
  motion,
  Variants,
  } from 'framer-motion';


type Props = {
  log: LogWithRelation;
};

export const LogCard: VFC<Props> = ({ log }) => {
  const {
    title,
    markdown,
    html,
    contentName,
    tags,
    blocks,
    createdAt,
    contentId,
  } = log;
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleIsOopen = () => setIsOpen((prev) => !prev);

  const { setLog } = useContext(LogContext);
  
  const history = useHistory();
  const { dispatch: dispatchBlocksAction } = useContext(SelectedBlocksForHandleNoteContext);
  const { setMarkdown } = useContext(MarkdownForHandleNoteContext);
  const { setSelectedTags } = useContext(SelectedTagsContext);
  
  const onCreateNewNoteFromTheLog = useCallback(() => {
    setMarkdown(markdown);
    console.log('onCreateNewNoteFromTheLog', blocks);
    dispatchBlocksAction({ type: 'SELECTED_BLOCKS/SET', blocks: blocks });
    setSelectedTags(tags);
    history.push(`/content/${contentId}/createnote`);
  }, [history, blocks, markdown, tags]);

  const { 
    onOpen: onOpenModal
    } = useContext(ModalToSubmitLogContext);
  
  const onOpenModalWithSetLog = () => {
    onOpenModal();
    setLog(log);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.01 }}
        onClick={toggleIsOopen}
        style={{
          width: '100%',
          borderLeftWidth: '8px',
          borderStyle: 'solid',
          padding: '16px',
          backgroundColor: colors.cyan.BACKGROUND,
          borderColor: colors.cyan.DEFAULT,
          color: colors.text,
          zIndex: 1,
        }}
      >
        <div css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <div css={{ width: '90%' }}>
            <div css={{
              fontSize: font.size.SS,
              marginBottom: '8px',
            }}>
              {makeFormalTimeString(createdAt)}
            </div>
            <TagsList 
              css={{ marginBottom: '4px' }}
              tags={tags} />
            <h2 css={{ fontSize: font.size.M }}>{title}</h2>
          </div>
          <MiniBlockList blocks={blocks} />
        </div>
        
        <div css={{ fontSize: font.size.SS, textAlign: 'end' }}>at {contentName}</div>
      </motion.button>
      <Collapse in={isOpen}>
        <div css={{
          padding: '16px',
          border: `1px solid ${colors.cyan.DEFAULT}`,
          borderTopWidth: 0,
          borderLeftWidth: '8px',
          marginBottom: '16px',
        }}>
          <BlockList blocks={blocks} /> 
          <div className="znc" dangerouslySetInnerHTML={{ __html: html }}></div>
          
        </div>
        <div css={{
          display: 'flex',
          justifyContent: 'space-between',
        }}>
          <NormalButton onClick={() => setIsOpen(false)}>
            Close
          </NormalButton>
          <div css={{ display: 'flex' }}>
          <SquareButton
            css={{ marginRight: '8px' }}
            onClick={onCreateNewNoteFromTheLog}
            Icon={EditNoteIcon} />
          <SquareButton 
            onClick={onOpenModalWithSetLog}
            Icon={CommitIcon} />
          </div>
        </div>
      </Collapse>
    </>
  );
};
