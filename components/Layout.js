import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";
import Modal from "./Modal";

const Layout = ({ children }) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="content">
      <Navbar openModal={openModal} />
      <Modal isOpen={isModalOpen} close={closeModal} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

