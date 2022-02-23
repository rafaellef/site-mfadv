import Link from "next/link";
import Image from "next/image";

const Navbar = ({ openModal }) => {
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
    </nav>
  );
};

export default Navbar;
