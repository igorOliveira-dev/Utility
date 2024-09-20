import Link from "next/link";

import CounterContainer from "./counterContainer/counterContainer";

export async function generateMetadata() {
  return {
    title: "Contador de caracteres | Utility",
    description:
      "Use nosso contador de caracteres, palavras e linhas para garantir que seus textos atendam a limites específicos. Ideal para escritores, estudantes e profissionais.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/contador-caracteres",
    },
  };
}

export default function CharacteresCounter() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Contador de caracteres:</h1>
      <CounterContainer />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">Conheça o Contador de Caracteres</h2>
          <p>
            Nosso <strong>contador de caracteres</strong> é uma ferramenta essencial para garantir que seus textos atendam a limites
            específicos. Ideal para escritores, estudantes e profissionais, ele permite contar caracteres, palavras e linhas de forma
            rápida e precisa.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Como Utilizar o Contador de Caracteres</h2>
          <p>
            Para usar o <strong>contador de caracteres</strong>, basta inserir ou colar seu texto no campo designado. A ferramenta
            calculará automaticamente o número de caracteres, palavras e linhas, fornecendo resultados instantâneos e precisos. Isso é
            útil para ajustar textos a limites específicos, como em redes sociais, trabalhos acadêmicos e mais.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Vantagens do Contador de Caracteres</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Precisão e rapidez:</strong> Obtenha contagens exatas de caracteres, palavras e linhas em tempo real, eliminando
              a necessidade de contagens manuais.
            </li>
            <li>
              <strong>Versatilidade:</strong> Ideal para uma variedade de usos, incluindo redação de textos para redes sociais, artigos
              acadêmicos, e-mails profissionais e muito mais.
            </li>
            <li>
              <strong>Facilidade de uso:</strong> Com uma interface intuitiva, qualquer pessoa pode usar o contador de caracteres sem
              dificuldades, tornando os cálculos acessíveis a todos.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Dicas para Utilizar o Contador de Caracteres</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Revise seu texto:</strong> Sempre confira o texto inserido para garantir que a contagem seja precisa e que o
              conteúdo esteja correto.
            </li>
            <li>
              <strong>Planeje seus textos:</strong> Use o contador para planejar a extensão de seus textos, garantindo que eles atendam
              aos requisitos de caracteres e palavras.
            </li>
            <li>
              <strong>Experimente diferentes formatos:</strong> Teste com diversos tipos de texto para ver como a contagem varia e
              ajuste conforme necessário.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Considerações Finais</h2>
          <p>
            Utilize nosso <strong>contador de caracteres</strong> para garantir que seus textos atendam a limites específicos de forma
            rápida e precisa. Para uma análise mais detalhada e personalizada, é sempre recomendável revisar seu texto manualmente.
            Simplifique seu trabalho com nossa prática ferramenta de contagem de caracteres.
          </p>
        </div>
      </article>
      <div className="w-full pt-2 transparent flex justify-center">
        <div className="m-2">
          <h3 className="m-2">Serviços semelhantes:</h3>
          <nav className="flex flex-wrap">
            <Link href="calculadora-regra-de-tres" className="p-2 text-transparent90 underline">
              Calculadora de regra de três
            </Link>
            <Link href="conversor-binario" className="p-2 text-transparent90 underline">
              Conversor de binário
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
