import { VFC } from "react";

import { colors, font } from "~/styleConfig";

import { makeFormalDateString } from "~/utils";

import { LogWithRelation } from "~/pages/type";

import { LogCard } from "./components";

type Props = {
  logs: LogWithRelation[];
};

export const LogsForDate: VFC<Props> = ({ logs }) => {
  if (logs.length === 0) return <>No Logs</>;

  const { createdAt: createdDate } = logs[0];

  return (
    <div
      css={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div
        css={{
          color: colors.text,
          fontSize: font.size.S,
          marginBottom: "8px",
        }}
      >
        {makeFormalDateString(createdDate)}
      </div>
      <ul
        css={{
          width: "70%",
          "> li": {
            marginBottom: "32px",
          },
        }}
      >
        {logs.map((log) => (
          <li key={log.id}>
            <LogCard log={log} />
          </li>
        ))}
      </ul>
    </div>
  );
};
