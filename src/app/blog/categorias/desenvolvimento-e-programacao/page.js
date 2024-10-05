import Article from "../../components/mainArticlesSection/Article";
import ReturnButton from "../../components/ReturnButton";
import { articles } from "../../data/data.js";

export async function generateMetadata() {
  return {
    title: "Blog - Desenvolvimento e programação | Utility",
    description:
      "Veja as principais novidades sobre a programação e o desenvolvimento, entenda as melhores práticas, uso de IA e muito mais.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog/categorias/desenvolvimento-e-programacao",
    },
  };
}

export default function NoticesAndTendences() {
  const filteredArticles = articles
    .filter((article) => article.category === "desenvolvimento-e-programacao")
    .sort((a, b) => b.id - a.id);
  return (
    <section className="p-6 full-screen">
      <ReturnButton />
      <h1 className="text-2xl font-semibold my-6">Desenvolvimento e programação:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {filteredArticles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
