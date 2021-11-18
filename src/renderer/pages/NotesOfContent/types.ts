type Subject = '' | 'Note' | 'Tag' | 'Date';
type Predicate = '' | 'IS' | 'INCLUDE' | 'IS SINCE' | 'IS UNTIL';
type Input = string;
type Operators = 'AND' | 'OR';
type Condition = {
  id: number; // ConditionListコンポーネント内のみで使用するid。自動採番しやすいようにnumber型を採用
  operator: Operators;
  subject: Subject;
  predicate: Predicate;
  input: Input;
};

export type { Subject, Predicate, Input, Operators, Condition };
