// import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ openModal }) => {
  // const [openModal, setOpenModal] = useState(false);

  return (
    <nav>
      <div className="logo">
        <Image
          src="/arte/mario-filho-logo-2-horizontal.png"
          alt="logo-mario-filho-advogados"
          width={250}
          height={125}
        />
      </div>
      <div className="main-buttons">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/#about">
          <a>Escritório</a>
        </Link>
        <Link href="/#contact">
          <a>Contato</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </div>
      <button
        className="button-client"
        onClick={openModal}
        // onClick={() => {
        //   setOpenModal(true);
        // }}
      >
        Área do cliente
      </button>
      {/* {openModal && <Modal closeModal={setOpenModal} />} */}
    </nav>
  );
};

export default Navbar;
