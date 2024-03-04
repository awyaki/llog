import { VFC } from "react";

import { ContentWithRelation } from "~/pages/type";

import { SideMenu, UpdateContentForm } from "~/components";

type UpdateContentProps = {
  isOpen: boolean;
  onClose: () => void;
  content: ContentWithRelation;
};

export const UpdateContent: VFC<UpdateContentProps> = ({
  isOpen,
  onClose,
  content,
}) => {
  return (
    <SideMenu isOpen={isOpen} onClose={onClose}>
      <UpdateContentForm key={isOpen ? "open" : "close"} content={content} />
    </SideMenu>
  );
};
