import SliderFotos from "../components/Slider";
import Image from "next/image";

const Escritorio = () => {
  return (
    <div className="about-page">
      <div className="about-intro-bar">
        <Image
          className="service-image image-office"
          src="/fotos/mario-filho-advogados-sala-espera.jpg"
          alt="carteira de trabalho"
          objectFit="cover"
          layout="fill"
        />
        <h1>Escritório</h1>
      </div>

      <div className="about-intro">
        <div className="text-intro">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed nisi,
            consequatur quod a accusantium nihil molestiae quia provident quam
            architecto, enim non minus incidunt dicta aperiam adipisci dolores,
            repudiandae omnis ad voluptatem aspernatur quis autem. Distinctio
            fugit quod maiores explicabo pariatur quam ea aspernatur
          </p>
        </div>
      </div>

      <SliderFotos />

      <div className="team-section">
        <h2 className="team-text">Nosso time</h2>
        <div className="about-team">
          <div className="column">
            <div className="card-div">
              <Image
                src="/equipe/mario-filho-advogado.jpg"
                layout="responsive"
                objectFit="contain"
                width={100}
                height={100}
                className="card-image"
              />
              <div className="team-description">
                <h2>Mario Filho</h2>
                <p className="title-description">Advogado</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card-div">
              <Image
                src="/equipe/fabiana-prestes-advogada.jpg"
                layout="responsive"
                objectFit="contain"
                width={100}
                height={100}
                className="card-image"
              />
              <div className="team-description">
                <h2>Fabiana Prestes</h2>
                <p className="title-description">Advogada</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card-div">
              <Image
                src="/equipe/rafael-lopes-advogado.jpg"
                layout="responsive"
                objectFit="contain"
                width={100}
                height={100}
                className="card-image"
              />
              <div className="team-description">
                <h2>Rafael Lopes</h2>
                <p className="title-description">Advogado</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card-div">
              <Image
                src="/equipe/nelida-leal-advogada.jpg"
                layout="responsive"
                objectFit="contain"
                width={100}
                height={100}
                className="card-image"
              />
              <div className="team-description">
                <h2>Nelida Leal</h2>
                <p className="title-description">Advogada</p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card-div">
              <Image
                src="/equipe/julia-wurtig-advogada.jpg"
                layout="responsive"
                objectFit="contain"
                width={100}
                height={100}
                className="card-image"
              />
              <div className="team-description">
                <h2>Julia Wurtig</h2>
                <p className="title-description">Advogada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escritorio;
