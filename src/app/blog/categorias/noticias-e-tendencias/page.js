import Link from "next/link";
import Article from "../../components/mainArticlesSection/Article";
import ReturnButton from "../../components/ReturnButton";

export async function generateMetadata() {
  return {
    title: "Blog - notícias e tendências | Utility",
    description:
      "Esse é o blog de tecnologia certo para você procurar por qualquer coisa sobre a internet, softwares, hardwares e tudo que você possa imaginar!",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog",
    },
  };
}

export default function NoticesAndTendences() {
  const articles = [
    {
      title: "O que é a inteligência artificial?",
      description:
        "Esse artigo explica o que é uma inteligência artificial e mostra as mudanças que a inteligência artificial trouxe para a internet e para as pessoas.",
      date: "30 de setembro",
      readTime: 15,
      path: "/blog/artigos/o-que-e-inteligencia-artificial",
    },
  ];

  return (
    <section className="p-6 full-screen">
      <ReturnButton />
      <h1 className="text-2xl font-semibold my-6">Notícias e tendências:</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
}
