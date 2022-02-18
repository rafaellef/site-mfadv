import Link from "next/link";
import Image from "next/image";

export default function ArtigoCard({ artigo }) {
  const { titulo, slug, thumbnail } = artigo.fields;
  return (
    <Link href={"/blog/" + slug}>
      <div className="card">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={350}
          height={250}
          className="thumbnail-artigos"
        />
        <div className="title-artigo">
          <h2>{titulo}</h2>
        </div>
      </div>
    </Link>
  );
}
