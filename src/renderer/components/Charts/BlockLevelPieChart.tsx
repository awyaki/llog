import { VFC } from "react";

import { CSSObject } from "@emotion/react";

import { colors } from "~/styleConfig";

import { PieChart, Pie, Tooltip, Cell } from "recharts";

import { makeMiniBlockStyle } from "~/style";

export type BlockLevelPieChartData = { name: string; value: number }[];

type BlockLevelPieChartProps = {
  css?: CSSObject;
  data: BlockLevelPieChartData;
};

type BlocksLevelLabelsProps = {
  css?: CSSObject;
  data: BlockLevelPieChartData;
};

const BlocksLevelLabels: VFC<BlocksLevelLabelsProps> = ({ data, ...rest }) => {
  const allBlocks = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <ul {...rest}>
      {data.map(({ name, value }, index) => (
        <div
          key={`label-${index}`}
          css={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <li
            css={{
              ...makeMiniBlockStyle(index),
              marginRight: "16px",
            }}
          ></li>
          <div>
            {name}: {value} ({Math.floor((value * 100) / allBlocks)}%)
          </div>
        </div>
      ))}
    </ul>
  );
};

export const BlockLevelPieChart: VFC<BlockLevelPieChartProps> = ({
  data,
  ...rest
}) => {
  return (
    <div
      css={{
        display: "flex",
      }}
      {...rest}
    >
      <PieChart css={{ marginRight: "32px" }} width={200} height={200}>
        <Pie
          startAngle={90}
          endAngle={-270}
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors.cyan.LEVEL[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <BlocksLevelLabels data={data} />
    </div>
  );
};
