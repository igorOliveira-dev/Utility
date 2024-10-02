import Article from "../../components/mainArticlesSection/Article";
import ReturnButton from "../../components/ReturnButton";
import { articles } from "../../data/data.js";

export async function generateMetadata() {
  return {
    title: "Blog - notícias e tendências | Utility",
    description:
      "Veja artigos sobre as principais notícias e tendências atuais relacionadas a tecnologia e fique por dentro de tudo que importa hoje.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog",
    },
  };
}

export default function NoticesAndTendences() {
  const filteredArticles = articles.filter((article) => article.category === "noticias-e-tendencias").sort((a, b) => b.id - a.id);
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
