import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Team from "../components/Team";
import Contact from "../components/Contact";
import { createClient } from "contentful";
import ArtigoCard from "../components/ArtigoCard";
import Aos from "aos";
import "aos/dist/aos.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "blogMarioFilhoAdvogados",
  });

  return {
    props: {
      artigos: res.items,
    },
  };
}

export default function Home({ artigos }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const ultimoPostOne = Object.values(artigos).slice(0, 1)[0];
  const ultimoPostTwo = Object.values(artigos).slice(1, 2)[0];
  const ultimoPostThree = Object.values(artigos).slice(2, 3)[0];

  return (
    <>
      <Head>
        <title>Mario Filho & Advogados | Escritório de Advocacia</title>
        <meta
          name="description"
          content="Escritório de Advocacia localizado em Pelotas atuando nas áreas de Direito Administrativo, Civil, Tributário, Empresarial, do Trabalho e da Família"
        />
        <link rel="icon" href="arte/mario-filho-icon-2.png" />
      </Head>
      <div>
        <Hero />
        <About />
        <Services />
        <Team />
        <div className="blog-preview-section" data-aos="fade-up">
          <h1>Últimas notícias e Artigos</h1>
          <div className="blog-preview">
            {<ArtigoCard key={ultimoPostOne.sys.id} artigo={ultimoPostOne} />}
            {<ArtigoCard key={ultimoPostTwo.sys.id} artigo={ultimoPostTwo} />}
            {
              <ArtigoCard
                key={ultimoPostThree.sys.id}
                artigo={ultimoPostThree}
              />
            }
          </div>
          <Link href="/blog">
            <div className={styles.btnBlog}>
              <button>Acesse nosso Blog</button>
            </div>
          </Link>
        </div>
        <Contact />
      </div>
    </>
  );
}
