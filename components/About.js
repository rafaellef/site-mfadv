import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" className="about-section">
      <div data-aos="fade-up" className="about-text">
        <h1>O escritório</h1>
        <p>
        Um ambiente criado para gerar tranquilidade, boa condição de trabalho, conforto para equipe e clientes.
        </p>
        <div className={styles.btnAction}>
          <Link href="/escritorio">
            <button>Saiba mais</button>
          </Link>
        </div>
      </div>
      <div data-aos="fade-up" className="about-image">
        <Image
          className="imageFachada"
          src="/fotos/mario-filho-advogados-fachada.jpg"
          alt="Fachada do escritório de advocacia Mário Filho & Advogados"
          width={650}
          height={450}
        />
      </div>
    </div>
  );
};

export default About;
