import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
        <div data-aos="fade-up" className="service d-admin">
          <h1>Direito Administrativo</h1>
        </div>
        <div data-aos="fade-up" className="service d-civil">
          <h1>Direito Civil</h1>
        </div>
        <div data-aos="fade-up" className="service d-tributario">
          <h1>Direito Tributário</h1>
        </div>
        <div data-aos="fade-up" className="service d-empresarial">
          <h1>Direito Empresarial</h1>
        </div>
        <div data-aos="fade-up" className="service d-trabalho">
          <h1>Direito do Trabalho</h1>
        </div>
        <div data-aos="fade-up" className="service d-familia">
          <h1>Direito da Família</h1>
        </div>
      </div>
    </section>
  );
};

export default Services;
