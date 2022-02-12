import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { colors } from '~/styleConfig';

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from 'recharts';

export type BlockLevelPieChartData = { name: string, value: number }[];

type BlockLevelPieChartProps = {
  css?: CSSObject;
  data: BlockLevelPieChartData;
};

const data = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 200
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 260
  },
  {
    "name": "Group F",
    "value": 100
  },
];

export const BlockLevelPieChart: VFC<BlockLevelPieChartProps> = ({
  ...rest
}) => {
  return (
    <PieChart 
      width={250} 
      height={250}>
      <Pie 
        startAngle={90}
        endAngle={-270}
        data={data} 
        dataKey="value" 
        nameKey="name" 
        cx="50%" 
        cy="50%" 
        outerRadius={100}>
        {data.map((_, index) => (<Cell key={`cell-${index}`} fill={colors.cyan.LEVEL[index]}/>))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
