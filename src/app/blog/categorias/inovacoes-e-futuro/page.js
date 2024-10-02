import Article from "../../components/mainArticlesSection/Article";
import ReturnButton from "../../components/ReturnButton";
import { articles } from "../../data/data.js";

export async function generateMetadata() {
  return {
    title: "Blog - Inovações e futuro | Utility",
    description: "Conheça o futuro da tecnologia, veja onde chegaremos nos próximos anos com essa área tão fascinante.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog",
    },
  };
}

export default function NoticesAndTendences() {
  const filteredArticles = articles.filter((article) => article.category === "inovacoes-e-futuro").sort((a, b) => b.id - a.id);
  return (
    <section className="p-6 full-screen">
      <ReturnButton />
      <h1 className="text-2xl font-semibold my-6">Notícias e tendências:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {filteredArticles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
