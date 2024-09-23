import Link from "next/link";

import RuleOfThreeCalculator from "./calculator/RuleOfThreeCalculator";

export async function generateMetadata() {
  return {
    title: "Calculadora de Regra de Três | Utility",
    description:
      "Use nossa calculadora de regra de três para resolver problemas de proporção de forma rápida e fácil. Insira os valores conhecidos e obtenha o valor desconhecido automaticamente. Ideal para cálculos de proporção direta em diversas situações do dia a dia.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/calculadora-regra-de-tres",
    },
  };
}

export default function RuleOfThree() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Calculadora de Regra de Três:</h1>
      <RuleOfThreeCalculator />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">Introdução à Calculadora de Regra de Três</h2>
          <p>
            A <strong>calculadora de regra de três</strong> é uma ferramenta prática que permite resolver problemas de proporção de
            forma rápida e fácil. Insira os valores conhecidos e obtenha o valor desconhecido automaticamente. Ideal para cálculos de
            proporção direta em diversas situações do dia a dia.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Guia de Uso da Calculadora de Regra de Três</h2>
          <p>
            Para usar a <strong>calculadora de regra de três</strong>, insira os valores conhecidos nos campos designados. A ferramenta
            calculará automaticamente o valor desconhecido, fornecendo resultados rápidos e precisos. Isso é útil para situações como
            resolver problemas de proporção em compras, receitas, e muito mais.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Por que Usar a Calculadora de Regra de Três?</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Resultados imediatos e precisos:</strong> A calculadora oferece resultados instantâneos, eliminando a necessidade
              de cálculos manuais e reduzindo a margem de erro.
            </li>
            <li>
              <strong>Aplicabilidade ampla:</strong> Seja para resolver problemas de proporção direta ou inversa, a ferramenta é útil
              em uma ampla gama de contextos.
            </li>
            <li>
              <strong>Interface amigável:</strong> Com uma interface intuitiva, qualquer pessoa pode usar a calculadora sem
              dificuldades, tornando os cálculos acessíveis a todos.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Melhores Práticas para Usar a Calculadora de Regra de Três</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Revise os valores inseridos:</strong> Sempre confira os números que você está usando para garantir que os
              cálculos sejam precisos.
            </li>
            <li>
              <strong>Utilize para planejamento:</strong> Use a calculadora para planejar receitas, resolver problemas de proporção em
              projetos e muito mais.
            </li>
            <li>
              <strong>Teste diferentes cenários:</strong> Experimente várias situações para entender melhor como as proporções afetam
              seus cálculos e decisões.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Encerramento</h2>
          <p>
            Utilize nossa <strong>calculadora de regra de três</strong> para resolver problemas de proporção de forma rápida e fácil.
            Para uma análise mais detalhada e personalizada, é sempre recomendável consultar um profissional. Simplifique sua vida com
            nossa prática <strong>calculadora de regra de três</strong>.
          </p>
        </div>
      </article>
      <div className="w-full pt-2 transparent flex justify-center">
        <div className="m-2">
          <h3 className="m-2">Serviços semelhantes:</h3>
          <nav className="flex flex-wrap">
            <Link href="calculadora-imc" className="p-2 text-transparent90 underline">
              Calculadora de IMC
            </Link>
            <Link href="contador-caracteres" className="p-2 text-transparent90 underline">
              Contador de caracteres
            </Link>
            <Link href="calculadora-porcentagem" className="p-2 text-transparent90 underline">
              Calculadora de porcentagem
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
