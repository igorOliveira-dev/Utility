"use client";

import { useState } from "react";
import { articles } from "../../data/data";
import Article from "../mainArticlesSection/Article";

export default function SearchArticles() {
  const [search, setSearch] = useState("");
  const [finalSearch, setFinalSearch] = useState("");
  const [error, setError] = useState("");

  const test = (e) => {
    e.preventDefault();

    if (search.length < 4) {
      setError("A pesquisa deve ter pelo menos 4 caracteres.");
      return;
    }

    setError("");
    let filteredArticles = articles
      .filter(
        (article) =>
          article.title.toLowerCase().includes(search.toLowerCase()) ||
          article.description.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => b.id - a.id)
      .slice(0, 8);

    setFinalSearch(filteredArticles);
  };

  return (
    <>
      <form className="flex" onSubmit={test}>
        <input
          type="text"
          className="max-w-64 w-full text-black p-2 rounded-md transparent20"
          placeholder="Pesquise por artigos"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
          Pesquisar
        </button>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 mt-6">
        {finalSearch.length > 0 ? (
          finalSearch.map((article, index) => <Article key={index} {...article} />)
        ) : (
          <p className="text-gray-400">Nenhum artigo encontrado.</p>
        )}
      </div>
    </>
  );
}
