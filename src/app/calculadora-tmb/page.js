import Calculator from "./calculator/Calculator";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Calculadora de TMB | Utility",
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
          <h2 className="text-2xl font-bold">
            Descubra Sua <strong>Taxa Metabólica Basal (TMB)</strong> e <strong>Gasto Calórico Total</strong>
          </h2>
          <p>
            Nossa <strong>calculadora de TMB</strong> online ajuda você a entender quantas calorias seu corpo precisa para manter as
            funções vitais em repouso. Além disso, calculamos seu <strong>gasto calórico total</strong>, que inclui todas as atividades
            diárias. Ideal para quem deseja gerenciar peso, planejar dietas ou simplesmente entender melhor seu metabolismo.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl font-bold">
            Como Calcular Sua <strong>TMB</strong> e <strong>Gasto Calórico</strong>
          </h2>
          <p>
            Para usar a <strong>calculadora de TMB</strong>, insira seus dados como peso, altura, idade e nível de atividade física. A
            ferramenta fornecerá uma estimativa precisa da sua <strong>taxa metabólica basal</strong> e do seu{" "}
            <strong>gasto calórico total</strong>, essencial para planejar suas necessidades calóricas diárias.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl font-bold">
            Entenda a Relação entre <strong>Calorias</strong> e <strong>Peso</strong>
          </h2>
          <p>
            Comer acima do seu <strong>gasto calórico total</strong> resulta em <strong>ganho de peso</strong>, enquanto comer abaixo
            resulta em <strong>perda de peso</strong>. Manter um equilíbrio é crucial para atingir suas metas de saúde e bem-estar.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl font-bold">
            Vantagens de Usar a <strong>Calculadora de TMB</strong>
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Precisão e Confiabilidade:</strong> Obtenha resultados baseados em fórmulas científicas, garantindo uma
              estimativa precisa da sua <strong>TMB</strong> e <strong>gasto calórico</strong>.
            </li>
            <li>
              <strong>Facilidade de Uso:</strong> Interface intuitiva que permite qualquer pessoa calcular sua <strong>TMB</strong> e{" "}
              <strong>gasto calórico</strong> sem complicações.
            </li>
            <li>
              <strong>Planejamento Personalizado:</strong> Use os resultados para ajustar sua dieta e rotina de exercícios de acordo
              com suas metas de saúde.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl font-bold">
            Dicas para Maximizar os Benefícios da <strong>Calculadora de TMB</strong>
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Atualize Regularmente:</strong> Recalcule sua <strong>TMB</strong> periodicamente, especialmente após mudanças
              significativas no peso ou nível de atividade.
            </li>
            <li>
              <strong>Combine com Exercícios:</strong> Use a <strong>TMB</strong> como base para planejar uma rotina de exercícios que
              complemente suas necessidades calóricas.
            </li>
            <li>
              <strong>Consulte um Profissional:</strong> Para um plano de saúde mais detalhado, considere consultar um nutricionista ou
              médico.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl font-bold">Conclusão</h2>
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
            <Link href="contador-calorias" className="p-2 text-transparent90 underline">
              Contador de calorias
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
