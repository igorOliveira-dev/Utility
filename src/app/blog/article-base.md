import ReturnButton from "../../components/ReturnButton";
import SimilarArticles from "../../components/SimilarArticles";

export async function generateMetadata() {
return {
title: " | Utility",
description: "",
alternates: {
canonical: "https://utilitytools.vercel.app/blog/artigos/",
},
};
}

export default function Article() {
const keywords = [""];
const currentUrl = "/blog/artigos/";

return (
<article className="p-6">
<ReturnButton />
<header className="mt-4">
<h1 className="text-3xl font-bold"></h1>
<p className="mt-2"></p>
</header>
<nav className="shadow p-4">
<details className="p-2">
<summary className="cursor-pointer p-2 text-lg font-semibold">
Você verá nesse artigo:
</summary>
<ul className="list-disc list-inside">
<li>
<a href="#" className="text-blue-500 hover:text-blue-700 underline"></a>
</li>
</ul>
</details>
</nav>
<section id="" className="mb-8">
<h2 className="text-2xl font-bold mb-2"></h2>
<p></p>
<ul className="list-disc list-inside">
<li></li>
</ul>
</section>
<ReturnButton />
<SimilarArticles keywords={keywords} currentUrl={currentUrl} />
</article>
);
}
