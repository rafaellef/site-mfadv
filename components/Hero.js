import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.typewriter}>
        <br />
        <br />
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Soluções Jurídicas com dedicação")
            .pauseFor(4000)
            .deleteChars(9)
            .pause(2000)
            .typeString("compromentimento")
            .pauseFor(4000)
            .deleteChars(16)
            .pause(2000)
            .typeString("experiência")
            .start();
          }}
        />
      </div>
      <div className={styles.btnHero}>
        <Link href="/#contact">
          <button>Entre em contato</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
