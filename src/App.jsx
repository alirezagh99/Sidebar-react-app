import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { sidebarContext } from "./store/SidebarCtx";
import { useContext } from "react";
function App() {
  const ctx = useContext(sidebarContext);
  return (
    <>
      <Home />
      {ctx.isSidebarOpen && <Sidebar />}
      {ctx.isModalOpen && <Modal />}
    </>
  );
}

export default App;
