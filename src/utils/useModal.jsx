import React from "react";

import { closeIcon } from "../assets/iconsBank";

function useModal() {
  const [open, setOpen] = React.useState(false);

  function setContent(content) {
    if (open) {
      return (
        <div className='useModal-bg fixed top-0 z-10 h-screen w-screen bg-primary/50 overflow-hidden flex justify-center items-center'>
          <div className='useModal-frame relative bg-tertiary p-8 m-4 rounded-2xl shadow-lg '>
            <div
              className='absolute top-3 right-3 cursor-pointer'
              onClick={() => triggerModal()}
            >
              {closeIcon}
            </div>
            <div className='useModal-content py-2'>{content}</div>
          </div>
        </div>
      );
    }
  }

  function triggerModal() {
    setOpen(!open);
  }

  return [setContent, triggerModal];
}

export default useModal;