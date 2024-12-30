import React, { useContext } from "react";
import { links, social } from "../data";
import { IoClose } from "react-icons/io5";
import { sidebarContext } from "../store/SidebarCtx";
function Sidebar() {
  const ctx = useContext(sidebarContext);
  const sidebarWidth = ctx.isSidebarOpen ? "300px" : "0px";
  return (
    <div
      style={{ width: sidebarWidth }}
      className="absolute top-0 bg-white left-0 bottom-0 overflow-hidden border transition-all duration-500"
    >
      <div className="flex flex-row justify-between  items-center p-3 mb-10">
        <h3 className="text-xl font-medium">
          Sidebar <span className="text-blue-400">Menu</span>
        </h3>
        <button
          onClick={() => ctx.handleCloseSidebar()}
          className="text-2xl hover:text-blue-400 font-bold transition-all duration-300"
        >
          <IoClose />
        </button>
      </div>
      <nav className="ml-5">
        <ul>
          {links.map((item) => {
            return (
              <li key={item.id} className="mb-3">
                <a
                  href={item.url}
                  className="flex gap-3 items-center hover:text-blue-400 transition-all duration-300"
                >
                  <span>{item.icon}</span>
                  <h5>{item.text}</h5>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="icons flex flex-row absolute  bottom-5 gap-4 left-1/4">
        {social.map((item) => {
          return (
            <a
              key={item.id}
              href={item.url}
              className=" text-blue-400 hover:text-blue-800 transition-all duration-300"
            >
              <span key={item.id}>{item.icon}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
