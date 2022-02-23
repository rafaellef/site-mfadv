import Head from "next/head";
import { createClient } from "contentful";
import ArtigoCard from "../../components/ArtigoCard";
import Image from "next/image";

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

const Blog = ({ artigos }) => {
  console.log(artigos);

  return (
    <>
      <Head>
        <title>Mario Filho & Advogados | Blog</title>
        <meta
          name="description"
          content="Blog com conteúdo sobre Direito Administrativo, Direito Civil, Direito Tributário, Direito Empresarial, Direito do Trabalho e Direito da Família"
        />
        <link rel="icon" href="arte/mario-filho-icon-2.png" />
      </Head>
      <div className="blog-section">
        <div className="blog-intro">
          <Image
            className="service-image"
            src="/fotos/estatua-simbolo-justica.jpg"
            alt="estatua justiça"
            objectFit="cover"
            layout="fill"
          />
          <h1>Blog</h1>
          <div className="citacao">
            <q>Nenhuma lei ou regra é mais poderosa do que o conhecimento.</q>
            <figcaption>&mdash; Platão</figcaption>
          </div>
        </div>
        <div className="artigos-list">
          {artigos.map((artigo) => (
            <ArtigoCard key={artigo.sys.id} artigo={artigo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
