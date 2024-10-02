import React from "react";
import Link from "next/link";
import { articles } from "../data/data.js";

const SimilarArticles = ({ keywords, currentUrl }) => {
  const filteredArticles = articles.filter((article) => {
    const titleWords = article.title.toLowerCase().split(/\W+/);
    const descriptionWords = article.description.toLowerCase().split(/\W+/);
    const allWords = [...titleWords, ...descriptionWords];

    return article.path !== currentUrl && keywords.some((keyword) => allWords.includes(keyword.toLowerCase()));
  });

  if (filteredArticles.length === 0) {
    return null;
  }

  return (
    <div className="m-4 mt-10 max-w-lg transparent flex rounded-lg">
      <div className="m-2">
        <h3 className="m-2">Artigos semelhantes:</h3>
        <nav className="flex flex-col">
          {filteredArticles.map((article, index) => (
            <Link key={index} href={article.path} className="p-2 text-transparent90 underline">
              {article.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SimilarArticles;
