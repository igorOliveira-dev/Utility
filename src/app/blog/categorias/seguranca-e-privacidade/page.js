import Article from "../../components/mainArticlesSection/Article";
import ReturnButton from "../../components/ReturnButton";
import { articles } from "../../data/data.js";

export async function generateMetadata() {
  return {
    title: "Blog - Segurança e privacidade | Utility",
    description: "Aprenda a proteger seus dados, evitar hackers e ter todo tipo de segurança na internet.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog/categorias/seguranca-e-privacidade",
    },
  };
}

export default function NoticesAndTendences() {
  const filteredArticles = articles.filter((article) => article.category === "seguranca-e-privacidade").sort((a, b) => b.id - a.id);
  return (
    <section className="p-6 full-screen">
      <ReturnButton />
      <h1 className="text-2xl font-semibold my-6">Inovações e futuro:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {filteredArticles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
