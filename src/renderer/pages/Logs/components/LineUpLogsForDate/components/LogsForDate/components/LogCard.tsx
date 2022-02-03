import { 
  VFC,
  useState
  } from 'react';



import { colors, font } from '~/styleConfig';

import { makeFormalTimeString } from '~/utils';

import { LogWithRelation } from '~/pages/type';


import { Collapse } from '@chakra-ui/transition';

import { 
  TagsList,
  MiniBlockList,
  BlockList,
  NormalButton
  } from '~/components';

import 'zenn-content-css';

import { 
  motion,
  } from 'framer-motion';

type Props = {
  log: LogWithRelation;
};

export const LogCard: VFC<Props> = ({ log }) => {
  const {
    id,
    title,
    markdown,
    html,
    contentName,
    tags,
    blocks,
    createdAt,
    noteId,
    contentId,
  } = log;
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleIsOopen = () => setIsOpen((prev) => !prev);


  console.log('LogCard', title);
  return (
    <>
      <motion.button
        onClick={toggleIsOopen}
        style={{
          width: '100%',
          borderLeftWidth: '8px',
          borderStyle: 'solid',
          padding: '16px',
          backgroundColor: colors.cyan.BACKGROUND,
          borderColor: colors.cyan.DEFAULT,
          color: colors.text,
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
        <NormalButton onClick={() => setIsOpen(false)}>
          Close
        </NormalButton>
      </Collapse>
    </>
  );
};
