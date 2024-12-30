import React, { useState } from "react";

export const sidebarContext = React.createContext();

function SidebarCtx(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <sidebarContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        handleOpenSidebar,
        handleCloseSidebar,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {props.children}
    </sidebarContext.Provider>
  );
}

export default SidebarCtx;
