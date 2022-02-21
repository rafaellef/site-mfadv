import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogMarioFilhoAdvogados",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogMarioFilhoAdvogados",
    "fields.slug": params.slug,
  });

  return {
    props: { articleText: items[0] },
  };
}

const Article = ({ articleText }) => {
  const { titulo, imagem, conteudo, autor } = articleText.fields;

  return (
    <div className="content-article">
      <div className="banner">
        <Image
          src={"https:" + imagem.fields.file.url}
          width={600}
          height={400}
        />
        <h1>{titulo}</h1>
      </div>
      <div className="conteudo">
        <div>{documentToReactComponents(conteudo)}</div>
        <hr />
        <h4>{autor}</h4>
      </div>
    </div>
  );
};

export default Article;
