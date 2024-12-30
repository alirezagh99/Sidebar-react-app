import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { sidebarContext } from "../store/SidebarCtx";

function Home() {
  const ctx = useContext(sidebarContext);
  return (
    <div>
      <button onClick={() => ctx.handleOpenSidebar()} className="absolute">
        <IoMenu className="text-3xl text-blue-400 hover:text-blue-800 transition-all duration-300 m-5" />
      </button>
      <button className="bg-blue-400 hover:bg-blue-800 transition-all duration-300 text-white px-3 py-1 font-medium rounded text-[12px] ml-[50%] mt-[30vh] -translate-x-1/2">
        Show Modal
      </button>
    </div>
  );
}

export default Home;
