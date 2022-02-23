import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="services-section">
      <div data-aos="fade-up" className="title-services">
        <h1>Nossos Serviços</h1>
      </div>
      <div className="cards-services">
        <div data-aos="fade-up" className="service">
          <Image
            className="service-image"
            src="/fotos/direito-administrativo.jpeg"
            alt="reunião de pessoas"
            objectFit="cover"
            layout="fill"
          />
          <h1>Direito Administrativo</h1>
        </div>
        <div data-aos="fade-up" className="service">
        <Image
            className="service-image"
            src="/fotos/direito-civil.jpg"
            alt="livro codigo civil"
            objectFit="cover"
            layout="fill"
          />
          <h1>Direito Civil</h1>
        </div>
        <div data-aos="fade-up" className="service">
        <Image
            className="service-image"
            src="/fotos/direito-tributario.jpg"
            alt="calculador"
            objectFit="cover"
            layout="fill"
          />
          <h1>Direito Tributário</h1>
        </div>
        <div data-aos="fade-up" className="service">
        <Image
            className="service-image"
            src="/fotos/direito-empresarial.jpg"
            alt="reunião de pessoas"
            objectFit="cover"
            layout="fill"
          />
          <h1>Direito Empresarial</h1>
        </div>
        <div data-aos="fade-up" className="service">
        <Image
            className="service-image"
            src="/fotos/direito-do-trabalho.jpg"
            alt="carteira de trabalho"
            objectFit="cover"
            layout="fill"
          />
          <h1>Direito do Trabalho</h1>
        </div>
        <div data-aos="fade-up" className="service">
        <Image
            className="service-image"
            src="/fotos/direito-da-familia.jpg"
            alt="familia"
            objectFit="cover"
            layout="fill"
          />
          <h1>Direito da Família</h1>
        </div>
      </div>
    </section>
  );
};

export default Services;
