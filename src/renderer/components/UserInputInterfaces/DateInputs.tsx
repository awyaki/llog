import { VFC, forwardRef, useCallback } from "react";

import { colors } from "~/styleConfig";

import { CSSObject } from "@emotion/react";

import DatePicker from "react-datepicker";

const labelStyle: CSSObject = {
  display: "block",
  marginBottom: "8px",
};

const CustomStyledDateInput = forwardRef<
  HTMLButtonElement,
  { value?: string; onClick?: () => void; onRemove: () => void }
>(({ value, onClick, onRemove }, ref) => {
  return (
    <>
      <button
        css={{
          width: "140px",
          borderBottom: `2px solid ${colors.cyan.DEFAULT}`,
          marginRight: "8px",
        }}
        ref={ref}
        onClick={onClick}
      >
        {value === "" ? "Month/Day/Year" : value}
      </button>
      <button onClick={onRemove}>x</button>
    </>
  );
});

type DateInputsProps = {
  css?: CSSObject;
  sinceQuery: Date | null;
  setSinceQuery: (arg: Date | null) => void;
  untilQuery: Date | null;
  setUntilQuery: (arg: Date | null) => void;
};

export const DateInputs: VFC<DateInputsProps> = ({
  sinceQuery,
  setSinceQuery,
  untilQuery,
  setUntilQuery,
  ...rest
}) => {
  const onRemoveSinceQuery = useCallback(() => {
    setSinceQuery(null);
  }, []);

  const onRemoveUntilQuery = useCallback(() => {
    setUntilQuery(null);
  }, []);

  return (
    <div css={{ display: "flex" }} {...rest}>
      <div
        css={{
          borderRight: `1px solid ${colors.cyan.DEFAULT}`,
          paddingRight: "24px",
          marginRight: "24px",
        }}
      >
        <label htmlFor="since-query" css={labelStyle}>
          Since
        </label>
        <DatePicker
          id="since-query"
          startDate={null}
          selected={sinceQuery}
          onChange={setSinceQuery}
          customInput={<CustomStyledDateInput onRemove={onRemoveSinceQuery} />}
        />
      </div>
      <div>
        <label htmlFor="until-query" css={labelStyle}>
          Until
        </label>
        <DatePicker
          id="until-query"
          startDate={null}
          selected={untilQuery}
          onChange={setUntilQuery}
          customInput={<CustomStyledDateInput onRemove={onRemoveUntilQuery} />}
        />
      </div>
    </div>
  );
};
