import { VFC, useState } from "react";

export const DangerousOperationButton = () => {
  const [isDisable, setisDisable] = useState(true);

  return (
    <div>
      <button></button>
      <button></button>
    </div>
  );
};
