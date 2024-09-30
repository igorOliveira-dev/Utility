import Link from "next/link";
import Article from "../../components/mainArticlesSection/Article";

export default function TutorialsAndTips() {
  const articles = [
    {
      title: "Exemplo de Título de um artigo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem vel massa accumsan accumsan.",
      date: "1 de setembro",
      readTime: 8,
      path: "blog/artigos/exemple",
    },
  ];

  return (
    <section className="p-6">
      <Link href="/blog" className="p-2 transparent20 rounded-lg">
        {"< Início do blog"}
      </Link>
      <h1 className="text-2xl font-semibold my-6">Tendências da tecnologia:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
