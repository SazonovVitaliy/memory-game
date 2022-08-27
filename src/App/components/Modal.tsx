import React, { FC } from "react";
interface IModal {
  setVisible: (arg: boolean) => void;
  visible: boolean;
}

const Modal: FC<IModal> = ({ setVisible, visible }) => {
  const rootClasses = ["modal"];
  if (visible) {
    rootClasses.push("active");
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={"modalContent"} onClick={(e) => e.stopPropagation()}>
        Поздравляем!!!
      </div>
    </div>
  );
};

export default Modal;
