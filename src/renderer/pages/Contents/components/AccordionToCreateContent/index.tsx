import { VFC } from "react";

import { AccordionButtonWithText, AddContentForm } from "~/components";

import { Collapse } from "@chakra-ui/transition";

import { useAccordionToCreateContent } from "./hooks";

export const AccordionToCreateContent: VFC = () => {
  const { isOpen, handleToggleOpen, handleClose } =
    useAccordionToCreateContent();

  return (
    <>
      <AccordionButtonWithText
        css={{ marginBottom: "16px" }}
        isOpen={isOpen}
        text="Add new"
        onClick={handleToggleOpen}
      />
      <Collapse in={isOpen}>
        <AddContentForm onSubmit={handleClose} />
      </Collapse>
    </>
  );
};
