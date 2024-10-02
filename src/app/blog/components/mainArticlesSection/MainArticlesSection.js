import Article from "./Article.js";
import { articles } from "../../data/data.js";

export default function MainArticlesSection() {
  const filteredArticles = articles.filter((article) => article.main === true).sort((a, b) => b.id - a.id);

  return (
    <section>
      <h2 className="text-2xl font-semibold my-6">Principais artigos:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
