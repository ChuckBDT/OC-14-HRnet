import React from "react";
import useModal from "../utils/useModal";

function EmployeesList() {
  const [setModalContentOne, setModalOpen] = useModal();

  const content = (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
      provident error sequi vitae praesentium natus mollitia tempora iusto sint?
      Nostrum, odio. Porro odit repudiandae iusto cupiditate at laborum maxime
      voluptas facere perferendis? Error sapiente animi dicta excepturi quam
      eos? Quas expedita dicta cumque nulla deleniti inventore, necessitatibus
      doloribus itaque ut.
    </p>
  );

  return (
    <>
      {setModalContentOne(content)}
      <button onClick={() => setModalOpen(12)} className='bg-red-500 h-24 w-48'>
        Test
      </button>
    </>
  );
}

export default EmployeesList;
