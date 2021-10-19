import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { style } from './style';

type Props = {
  name: string;
  className?: string;
  css?: CSSObject;
};

const Tag: VFC<Props> = ({ name, className, ...rest }) => {
  return (
    <div
      className={className}
      css={style} {...rest}>
      {name}
    </div>
  );
};

export default Tag;
