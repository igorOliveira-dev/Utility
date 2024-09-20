import Link from "next/link";
import Calculator from "./calculator/Calculator";

export async function generateMetadata() {
  return {
    title: "Calculadora de Porcentagem | Utility",
    description:
      "Use nossa calculadora de porcentagem para calcular facilmente porcentagens em diversas situações. Insira os valores necessários e obtenha resultados rápidos e precisos.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/calculadora-porcentagem",
    },
  };
}

export default function PercentCalculator() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Calculadora de Porcentagem:</h1>
      <Calculator />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">Entendendo a Calculadora de Porcentagem</h2>
          <p>
            A <strong>calculadora de porcentagem</strong> é uma ferramenta prática que permite calcular porcentagens de forma rápida e
            precisa. Seja para <strong>cálculos financeiros</strong>, <strong>descontos</strong>, <strong>aumentos</strong> ou outras
            situações do dia a dia, essa ferramenta simplifica os processos matemáticos, ajudando você a obter resultados exatos com
            facilidade.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Passo a Passo para Usar a Calculadora de Porcentagem</h2>
          <p>
            Para utilizar a <strong>calculadora de porcentagem</strong>, insira os <strong>valores necessários</strong> nos campos
            designados. A ferramenta calculará automaticamente a <strong>porcentagem desejada</strong>, fornecendo resultados rápidos e
            precisos. Isso é ideal para situações como calcular <strong>descontos em compras</strong>,{" "}
            <strong>aumentos salariais</strong>, ou qualquer outro cálculo percentual.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Vantagens de Utilizar a Calculadora de Porcentagem</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Cálculos rápidos e precisos:</strong> A calculadora de porcentagem oferece resultados imediatos, eliminando a
              necessidade de cálculos manuais e reduzindo a margem de erro.
            </li>
            <li>
              <strong>Versatilidade em diversas situações:</strong> Seja para calcular descontos, aumentos, juros ou proporções, a
              ferramenta é útil em uma ampla gama de contextos.
            </li>
            <li>
              <strong>Facilidade de uso:</strong> Com uma interface intuitiva, qualquer pessoa pode usar a calculadora de porcentagem
              sem dificuldades, tornando os cálculos acessíveis a todos.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Sugestões para Melhor Aproveitar a Calculadora de Porcentagem</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Verifique os valores inseridos:</strong> Sempre confira os números que você está usando para garantir que os
              cálculos sejam precisos.
            </li>
            <li>
              <strong>Use para planejamento financeiro:</strong> Utilize a calculadora para planejar seu orçamento, calcular economias
              em compras e avaliar aumentos salariais.
            </li>
            <li>
              <strong>Experimente diferentes cenários:</strong> Teste várias situações para entender melhor como as porcentagens afetam
              seus cálculos e decisões financeiras.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Considerações Finais</h2>
          <p>
            Utilize nossa <strong>calculadora de porcentagem</strong> para monitorar seus <strong>cálculos diários</strong>. Lembre-se
            de que, para uma análise mais detalhada e personalizada, é sempre recomendável consultar um
            <strong>profissional financeiro</strong>. Simplifique sua vida com nossa prática
            <strong>calculadora de porcentagem</strong>.
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
            <Link href="calculadora-regra-de-tres" className="p-2 text-transparent90 underline">
              Calculadora de regra de três
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
