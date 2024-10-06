import MainArticlesSection from "./components/mainArticlesSection/MainArticlesSection";
import CategorySection from "./components/categorySection/CategorySection";
import SearchArticles from "./components/searchArticles/SearchArticles";

export async function generateMetadata() {
  return {
    title: "Blog | Utility",
    description:
      "Esse é o blog de tecnologia certo para você procurar por qualquer coisa sobre a internet, softwares, hardwares e tudo que você possa imaginar!",
    alternates: {
      canonical: "https://utilitytools.vercel.app/blog",
    },
  };
}

export default function Blog() {
  return (
    <main className="p-8 full-screen">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <SearchArticles />
      <MainArticlesSection />
      <CategorySection />
    </main>
  );
}
