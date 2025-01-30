import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Aula 1 - navegacao */}
      <h1>Home</h1>
      <Link href="/sobre">Sobre</Link>
      {/* Aula 2 - dados dinamicos */}
      <h1>Acessar posts</h1>
      <Link href="/posts">Posts</Link>
      {/* Aula 3 - parametros */}
      <Link href="/exemplo?parametro=valor">Página com parâmetro</Link>
      {/* Aula 4 - nested routes */}
      <Link href='/produtos/categorias/roupas'>Ir a categoria de Roupas</Link>
    </div>
  );
}
