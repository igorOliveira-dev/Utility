import Link from "next/link";

export default function CategorySection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-6">Categorias:</h2>
      <nav className="flex flex-wrap gap-4">
        <Link
          href="blog/categorias/noticias-e-tendencias"
          className="transparent text-white py-4 px-6 rounded-lg transition-all bgHover"
        >
          Notícias e tendências
        </Link>
        <Link href="blog/categorias/inovacoes-e-futuro" className="transparent text-white py-4 px-6 rounded-lg transition-all bgHover">
          Inovações e futuro
        </Link>
        <Link
          href="blog/categorias/desenvolvimento-e-programacao"
          className="transparent text-white py-4 px-6 rounded-lg transition-all bgHover"
        >
          Desenvolvimento e programação
        </Link>
        <Link href="blog/categorias/tutoriais-e-dicas" className="transparent text-white py-4 px-6 rounded-lg transition-all bgHover">
          Tutoriais e dicas
        </Link>
      </nav>
    </section>
  );
}
