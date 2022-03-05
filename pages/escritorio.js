import Head from "next/head";
import SliderFotos from "../components/Slider";
import Image from "next/image";

const Escritorio = () => {
  return (
    <>
      <Head>
        <title>Mario Filho & Advogados | Escritório de Advocacia</title>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Escritório de Advocacia localizado em Pelotas atuando nas áreas de Direito Administrativo, Civil, Tributário, Empresarial, do Trabalho e da Família"
        />
        <link rel="icon" href="arte/mario-filho-icon-2.png" />
      </Head>

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
            O conjunto de recursos humanos e de um ambiente saudável contribui no diferencial do escritório. Móveis e equipamentos modernos associados a uma ampla biblioteca virtual e um software de última geração desenvolvido pela Thomson Reuters agregam dinâmica e precisão na prestação de serviços.
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
                  <p className="title-description">Especializado em Direito ....</p>
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
                  <p className="title-description">Especializado em Direito ....</p>
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
                  <p className="title-description">Especializado em Direito ....</p>
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
                  <p className="title-description">Especializado em Direito ....</p>
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
                  <p className="title-description">Especializado em Direito ....</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Escritorio;
