type Subject = "" | "Note" | "Tag" | "Date";
type Predicate = "" | "IS" | "INCLUDE" | "IS SINCE" | "IS UNTIL";
type Input = string;
type Operators = "AND" | "OR";
type Condition = {
  id: number; // ConditionListコンポーネント内のみで使用するid。自動採番しやすいようにnumber型を採用
  operator: Operators;
  not: boolean;
  subject: Subject;
  predicate: Predicate;
  input: Input;
};

type ConditionWithIsValid = Condition & { isValid: boolean };

export type {
  Subject,
  Predicate,
  Input,
  Operators,
  Condition,
  ConditionWithIsValid,
};
