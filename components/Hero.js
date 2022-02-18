import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.typewriter}>
        <br />
        <br />
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Soluções Jurídicas com").start();
          }}
        />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(4000)
              .typeString("dedicação")
              .pauseFor(3000)
              .deleteAll(100)
              .typeString("comprometimento")
              .pauseFor(3000)
              .deleteAll(100)
              .typeString("experiência")
              .start();
          }}
        />
      </div>
      <div className={styles.btnHero}>
        <button>Entre em contato</button>
      </div>
    </section>
  );
};

export default Hero;
