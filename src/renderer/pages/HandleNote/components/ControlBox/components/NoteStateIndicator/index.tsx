import { VFC } from 'react';

import { makeFormalTimeString } from '~/utils';

import { CSSObject } from '@emotion/react';

import { colors, font } from '~/styleConfig';

import { 
  motion,
  Variants,
  } from 'framer-motion';

const circleMotions: Variants = {
  warning: { 
    backgroundColor: colors.red.DEFAULT
    },
  normal: {
    backgroundColor: colors.gray.DEFAULT
  },
  ok: { 
    backgroundColor: colors.green.DEFAULT
    },
};

const descriptionMotions: Variants = {
  warning: { 
    color: colors.red.DEFAULT
    },
  normal: {
    color: colors.gray.DEFAULT
  },
  ok: { 
    color: colors.green.DEFAULT
    },

};

type Props = {
  css?: CSSObject;
  updatedAt: Date | undefined;
  isNoteExist: boolean;
  isNoteChange: boolean;
};

export const NoteStateIndicator: VFC<Props> = ({ 
  updatedAt,
  isNoteChange,
  isNoteExist,
  ...rest
}) => {
  console.log('NoteStateIndicator isNoteExist isNoteChange', isNoteExist, isNoteChange);
  const noteSavedState = (() => {
    if (!isNoteExist && isNoteChange) return { label: "warning", desc: 'Not saved' };
    if (!isNoteExist && !isNoteChange) return { label: "normal", desc: 'New note' };
    if (isNoteExist && isNoteChange) return { label: "warning", desc: 'Not saved' };
    if (isNoteExist && !isNoteChange) return { label: "ok", desc: 'No changes' };
    return { label: "", desc: "" };
  })();
  
  return (
    <div {...rest}>
      <div css={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '8px',
      }}>
        <motion.div
          variants={circleMotions}
          animate={noteSavedState.label}
          style={{ 
            marginRight: '8px',
            width: '20px',
            height: '20px',
            borderRadius: '20px',
          }}>
        </motion.div>
        <motion.div
          variants={descriptionMotions}
          animate={noteSavedState.label}
          style={{
            fontSize: font.size.S,
          }}>
          {noteSavedState.desc}
        </motion.div>
      </div>
      <div css={{ fontSize: font.size.S }}>{updatedAt ? makeFormalTimeString(updatedAt) : "No data"}</div>
    </div>
  );
};
