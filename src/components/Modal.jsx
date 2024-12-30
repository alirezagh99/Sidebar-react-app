import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { sidebarContext } from "../store/SidebarCtx";
function Modal() {
  const ctx = useContext(sidebarContext);
  return (
    <>
      <div
        onClick={() => ctx.handleCloseModal()}
        className="absolute z-10 left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)]"
      ></div>
      <div className="flex flex-col justify-center p-5 w-1/3 h-1/3 left-1/2 -translate-x-1/2 text-2xl text-center bg-white z-10 absolute">
        <button
          onClick={() => ctx.handleCloseModal()}
          className="absolute right-2 top-2 hover:text-blue-400 transition-all duration-300"
        >
          <IoClose />
        </button>
        <h3 className="">Modal Content</h3>
      </div>
      ;
    </>
  );
}

export default Modal;
