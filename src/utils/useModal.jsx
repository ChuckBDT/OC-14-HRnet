import React from "react";

function useModal() {
  const [open, setOpen] = React.useState(false);

  function setContent(content) {
    if (open) {
      return (
        <div className='useModal-bg fixed top-0 z-10 h-screen w-screen bg-primary/50 overflow-hidden flex justify-center items-center'>
          <div className='useModal-frame bg-tertiary p-8 m-4 rounded-2xl'>
            <div
              className='font-bold text-end cursor-pointer'
              onClick={() => triggerModal()}
            >
              Close
            </div>
            <div className='useModal-content'>{content}</div>
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
