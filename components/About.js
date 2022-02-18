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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio
          velit ut nihil molestiae numquam laborum! Consequuntur nihil deleniti
          doloribus recusandae aspernatur dolorum? Quidem sequi consequatur
          dolores ducimus delectus inventore quas natus! Debitis excepturi
          delectus quibusdam consectetur quo sapiente, ullam quas consequuntur
          assumenda laborum.
        </p>
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
