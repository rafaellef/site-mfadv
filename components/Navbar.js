import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = ({ openModal }) => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav>
      <div className="logo">
        <Image
          src="/arte/mario-filho-logo-2-horizontal.png"
          alt="logo-mario-filho-advogados"
          width={280}
          height={140}
        />
      </div>
      <div className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <div >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/escritorio">
            <a>Escritório</a>
          </Link>
          <Link href="/#contact">
            <a>Contato</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <button className="button-client" onClick={openModal}>
          Área do cliente
        </button>
      </div>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <AiOutlineClose /> : <AiOutlineMenu /> }
      </button>
    </nav>
  );
};

export default Navbar;
