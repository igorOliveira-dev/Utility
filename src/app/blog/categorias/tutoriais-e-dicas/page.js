import Article from "../../components/mainArticlesSection/Article";
import ReturnButton from "../../components/ReturnButton";
import { articles } from "../../data/data.js";

export async function generateMetadata() {
  return {
    title: "Blog - Tutoriais e dicas | Utility",
    description:
      "Artigos de dicas e tutoriais de todos os ramos da tecnologia estarão aqui, veja dicas de programação, de vendas online e de tudo da internet.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog/categorias/tutoriais-e-dicas",
    },
  };
}

export default function NoticesAndTendences() {
  const filteredArticles = articles.filter((article) => article.category === "tutoriais-e-dicas").sort((a, b) => b.id - a.id);
  return (
    <section className="p-6 full-screen">
      <ReturnButton />
      <h1 className="text-2xl font-semibold my-6">Tutoriais e dicas:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {filteredArticles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
