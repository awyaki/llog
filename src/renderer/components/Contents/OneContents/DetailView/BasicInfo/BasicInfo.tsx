import { VFC } from 'react';
import { CSSObject } from '@emotion/react';
import { tableStyle, tableHeadStyle } from './style';
import { makeTimeString } from '../../../../../utils/functions';

type Props = {
  css?: CSSObject;
  creation: Date; 
  latestCommit: Date;
  blocks: number;
  streak: number;
};

const BasicInfo: VFC<Props> = ({ creation, latestCommit, blocks, streak, ...rest }) => {
  return (
    <table css={tableStyle} {...rest}>
      <tbody>
      <tr>
        <th css={tableHeadStyle}>Creation</th>
        <td>{makeTimeString(creation)}</td>
      </tr>
      <tr>
        <th css={tableHeadStyle}>Latest Commit</th>
        <td>{makeTimeString(latestCommit)}</td>
      </tr>
      <tr>
        <th css={tableHeadStyle}>Blocks</th>
        <td>{blocks}</td>
      </tr>
      <tr>
        <th css={{ ...tableHeadStyle, paddingBottom: '0' }}>Streak</th>
        <td>{streak}</td>
      </tr>
      </tbody>
    </table>
  );
};

export default BasicInfo;
