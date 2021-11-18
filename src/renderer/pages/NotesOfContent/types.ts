type Subject = '' | 'Note' | 'Tag' | 'Date';
type Predicate = '' | 'IS' | 'INCLUDE' | 'IS SINCE' | 'IS UNTIL';
type Input = string;
type Operators = 'AND' | 'OR';
type Condition = {
  operator: Operators;
  subject: Subject;
  predicate: Predicate;
  input: Input;
};

export type { Subject, Predicate, Input, Operators, Condition };
