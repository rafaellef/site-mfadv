import Slider from "react-slick";
import Image from "next/image";

const SliderFotos = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image 
          className="slider-image"
          src="/fotos/mario-filho-advogados-escritorio.jpg"
          alt="Fachada do escritório de advocacia Mário Filho & Advogados"
          width={450}
          height={280} 
          />
        </div>
        <div>
          <Image
          className="slider-image"
          src="/fotos/mario-filho-advogados-fachada.jpg"
          alt="Fachada do escritório de advocacia Mário Filho & Advogados"
          width={450}
          height={280} 
          />
        </div>
        <div>
          <Image 
          className="slider-image"
          src="/fotos/mario-filho-advogados-entrada.jpg"
          alt="Fachada do escritório de advocacia Mário Filho & Advogados"
          width={450}
          height={280}
          />
        </div>
        <div>
          <Image 
          className="slider-image"
          src="/fotos/mario-filho-advogados-sala-espera.jpg"
          alt="Fachada do escritório de advocacia Mário Filho & Advogados"
          width={450}
          height={280}
          />
        </div>
        <div>
          <Image 
          className="slider-image"
          src="/fotos/mario-filho-advogados-sala-reunioes.jpg"
          alt="Fachada do escritório de advocacia Mário Filho & Advogados"
          width={450}
          height={280}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderFotos;
