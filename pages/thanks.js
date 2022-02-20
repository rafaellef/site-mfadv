import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Thanks = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Obrigado pelo seu contato!</h1>
      <h2>Retornaremos o mais breve possível</h2>
      <p>
        Voltar para{" "}
        <Link href="/">
          <a>Página Inicial</a>
        </Link>
      </p>
    </div>
  );
};

export default Thanks;