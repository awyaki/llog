import { VFC } from 'react';

import { colors } from '~/styleConfig';

import { 
  EditIcon, 
  PreviewNoteIcon,
  MenuButtonWrapper,
  } from '~/components';

type Props = {
  isEdit: boolean;
  onClick: () => void;
};

import { 
  motion,
  MotionStyle,
  Variants
  } from 'framer-motion';


const buttonStyle: MotionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30px',
  height: '30px',
  padding: '5px',
  textAlign: 'center',
  zIndex: 1
};

const containerMotions: Variants = {
  
};

const editButtonMotions: Variants = {
  edit: { color: colors.white },
  preview: { color: colors.gray.DEFAULT },
};

const previewButtonMotions: Variants = {
  edit: { color: colors.gray.DEFAULT },
  preview: { color: colors.white },
};

const circleMotion: Variants = {
  edit: { x: 0 },
  preview: { x: 38 }
};

export const SwitchEdit: VFC<Props> = ({ 
  isEdit,
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      style={{
        display: 'flex',
        padding: '8px',
        backgroundColor: colors.white,
        borderRadius: '90px',
        border: `1px solid ${colors.cyan.DEFAULT}`,
      }}
    >
      <motion.div
        variants={editButtonMotions}
        animate={isEdit ? "edit" : "preview"}
        style={{ ...buttonStyle, marginRight: '8px' }}
      >
        <EditIcon />
      </motion.div>
      <motion.div
        variants={previewButtonMotions}
        animate={isEdit ? "edit" : "preview"}
        style={buttonStyle}
      >
        <PreviewNoteIcon />
      </motion.div>
      <motion.span
        variants={circleMotion}
        animate={isEdit ? "eidit" : "preview"}
        style={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '20px',
          padding: '5px',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: colors.cyan.DEFAULT,
          backgroundColor: colors.cyan.DEFAULT,
          textAlign: 'center',
        }}>
      </motion.span>
    </motion.button>
    );
};
