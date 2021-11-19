import { VFC, ChangeEventHandler, Dispatch, MouseEventHandler } from 'react';

import { Action } from '~/pages/NotesOfContent/hooks/useConditions';

import {
  Select,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react"


import { Subject, Predicate, Condition } from '~/pages/NotesOfContent/types';
import { Tag } from '~/stub/types';
type GetPredicate = {
  subject: Subject;
  predicate: Predicate;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const GetPredicate: VFC<GetPredicate> = ({ subject, predicate, onChange }) => {
  switch(subject) {
    case 'Note':
      return (<Select value={predicate} onChange={onChange}>
                <option>IS</option>
                <option>INCLUDE</option>
              </Select>);
    case 'Tag':
      return (<Select value={predicate} onChange={onChange}>
                <option>IS</option>
                <option>INCLUDE</option>
              </Select>);
    case 'Date':
      return (<Select value={predicate} onChange={onChange}>
                <option>IS SINCE</option>
                <option>IS UNTIL</option>
              </Select>);
    default:
      return (<Select value={predicate} onChange={onChange} disabled>
              </Select>);
  }
};

// for switching Input component by the selected subject
type GetInput = { 
  subject: Subject;
  tags: Tag[];
  input: string;
  onChange?: ChangeEventHandler<HTMLSelectElement | HTMLInputElement>;
};

const GetInput: VFC<GetInput> = ({ subject, tags, input, onChange }) => {
  switch(subject) {
    case 'Tag': 
      return (
        <Select value={input} onChange={onChange}>
          <option value="">Select tag</option>
          {tags.map(({ name }) => <option key={name}>{name}</option>)}
        </Select>);
    case 'Note':
      return <Input value={input} onChange={onChange} />;
    case 'Date':
      return <Input value={input} onChange={onChange} />;
    default:
      return <Input value="" disabled />;
  }
};

//stub
const tags: Tag[] = [{ id: 1, name: 'インタープリタ' }, { id: 2, name: 'チューリング機械' }];

type Props = {
  condition: Condition;
  dispatch: Dispatch<Action>;
};
export const ConditionItem: VFC<Props> = ({ condition, dispatch }) => {
  const { id, operator, subject, not, predicate, input } = condition;
  
  const handleToggleOperator: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: 'MODAL/TOGGLE_OPERATOR', id: id });
  };

  const handleChangeSubject: ChangeEventHandler<HTMLSelectElement> = (e) => {
    dispatch({ type: 'MODAL/CHAGE_SUBJECT', id: id, newSubject: (e.target.value as Condition['subject']) });
  };

  return (
    <HStack>
      <Button onClick={handleToggleOperator}>{operator}</Button>
      <Select placeholder="select subject" value={subject} onChange={handleChangeSubject}>
        <option>Note</option>
        <option>Tag</option>
        <option>Date</option>
      </Select>
      <Button>not</Button>
      <GetPredicate 
        subject={subject}
        predicate={predicate}
        onChange={() => {}}
      />
      <GetInput 
        subject={subject} 
        tags={tags} 
        input={input} 
        onChange={() => {}}
      />
    </HStack>
  );
};
