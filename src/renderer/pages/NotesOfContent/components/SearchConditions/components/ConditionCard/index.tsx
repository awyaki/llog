import { VFC, Dispatch } from "react";
import { Action } from "../../../../hooks/useConditions";

import { Heading } from "@chakra-ui/react";

import { container } from "./style/container";
import { buttons } from "./style/buttons";
import { subContainer } from "./style/subContainer";

import { DeleteButton } from "./components/DeleteButton";
import { OpSwitch } from "./components/OpSwitch";
import { NotSwitch } from "./components/NotSwitch";
import { ConditionSwitch } from "./components/ConditionSwitch";
import { ConditionBody } from "./components/ConditionBody";

import { ConditionWithIsValid } from "~/pages/NotesOfContent/types";

type Props = {
  condition: ConditionWithIsValid;
  dispatch: Dispatch<Action>;
};

export const ConditionCard: VFC<Props> = ({ condition, dispatch }) => {
  const handleToggleIsValid = () => {
    dispatch({ type: "DRAWER/TOGGLE_ISVALID", id: condition.id });
  };

  const handleToggleOperator = () => {
    dispatch({ type: "DRAWER/TOGGLE_OPERATOR", id: condition.id });
  };

  const handleToggleNot = () => {
    dispatch({ type: "DRAWER/TOGGLE_NOT", id: condition.id });
  };

  const handleDelete = () => {
    dispatch({ type: "DRAWER/DELETE", id: condition.id });
  };

  return (
    <div css={container}>
      <div css={buttons}>
        <div>
          <OpSwitch op={condition.operator} onClick={handleToggleOperator} />
          <NotSwitch isOn={condition.not} onClick={handleToggleNot} />
        </div>
        <DeleteButton onClick={handleDelete} />
      </div>
      <Heading mb="3px" size="mg">
        {condition.subject}
      </Heading>
      <div css={subContainer}>
        <ConditionSwitch
          isOn={condition.isValid}
          onClick={handleToggleIsValid}
        />
        <ConditionBody condition={condition} />
      </div>
    </div>
  );
};
