import Calculator from "./calculator/Calculator";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Calculadora de Porcentagem | Utility",
    description:
      "Essa calculadora de taxa metabólica basal te ajuda a entender o mínimo de calorias que o seu corpo precisa com base nas suas informações.",
    alternates: {
      canonical: "https://utilitytools.vercel.app/calculadora-tmb",
    },
  };
}

export default function TmbCalculator() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Calculadora de TMB</h1>
      <Calculator />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">Descubra Sua Taxa Metabólica Basal (TMB)</h2>
          <p>
            Nossa <strong>calculadora de TMB</strong> online ajuda você a entender quantas calorias seu corpo precisa para manter as
            funções vitais em repouso. Ideal para quem deseja gerenciar peso, planejar dietas ou simplesmente entender melhor seu
            metabolismo.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Como Calcular Sua TMB</h2>
          <p>
            Para usar a <strong>calculadora de TMB</strong>, insira seus dados como peso, altura, idade e nível de atividade física. A
            ferramenta fornecerá uma estimativa precisa da sua taxa metabólica basal, essencial para planejar suas necessidades
            calóricas diárias.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Vantagens de Usar a Calculadora de TMB</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Precisão e Confiabilidade:</strong> Obtenha resultados baseados em fórmulas científicas, garantindo uma
              estimativa precisa da sua TMB.
            </li>
            <li>
              <strong>Facilidade de Uso:</strong> Interface intuitiva que permite qualquer pessoa calcular sua TMB sem complicações.
            </li>
            <li>
              <strong>Planejamento Personalizado:</strong> Use os resultados para ajustar sua dieta e rotina de exercícios de acordo
              com suas metas de saúde.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Dicas para Maximizar os Benefícios da Calculadora de TMB</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Atualize Regularmente:</strong> Recalcule sua TMB periodicamente, especialmente após mudanças significativas no
              peso ou nível de atividade.
            </li>
            <li>
              <strong>Combine com Exercícios:</strong> Use a TMB como base para planejar uma rotina de exercícios que complemente suas
              necessidades calóricas.
            </li>
            <li>
              <strong>Consulte um Profissional:</strong> Para um plano de saúde mais detalhado, considere consultar um nutricionista ou
              médico.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Conclusão</h2>
          <p>
            Utilize nossa <strong>calculadora de TMB</strong> para obter uma visão clara das suas necessidades calóricas diárias. Para
            uma análise mais detalhada e personalizada, é sempre recomendável consultar um profissional de saúde. Simplifique o
            gerenciamento do seu peso e saúde com nossa prática ferramenta online.
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
          </nav>
        </div>
      </div>
    </main>
  );
}
