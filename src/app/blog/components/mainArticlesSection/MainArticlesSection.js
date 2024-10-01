import Article from "./Article.js";

export default function MainArticlesSection() {
  const articles = [
    {
      title: "O que é a inteligência artificial?",
      description:
        "Esse artigo explica o que é uma inteligência artificial e mostra as mudanças que a inteligência artificial trouxe para a internet e para as pessoas.",
      date: "30 de setembro",
      readTime: 15,
      path: "blog/artigos/o-que-e-inteligencia-artificial",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold my-6">Principais artigos:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
