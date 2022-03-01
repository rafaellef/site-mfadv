import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" className="about-section">
      <div data-aos="fade-up" className="about-image">
        <Image
          className="imageFachada"
          src="/fotos/mario-filho-time.jpg"
          alt="Time de advogados do escritório de advocacia Mário Filho & Advogados"
          width={650}
          height={450}
        />
      </div>
      <div data-aos="fade-up" className="about-text">
        <h1>Nosso time</h1>
        <p>
        Equipe integrada e comprometida com um programa de formação continuada que qualifica e agrega conhecimento, gerando profissionais atualizados e colaborativos.
        </p>
        <div className={styles.btnAction}>
          <Link href="/escritorio">
            <button>Saiba mais</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;
