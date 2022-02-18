import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Opa!</h1>
      <h2>Página não encontrada</h2>
      <p>
        Voltar para{" "}
        <Link href="/">
          <a>Página Inicial</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
