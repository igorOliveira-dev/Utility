import Link from "next/link";
import ImcCalculatorContainer from "./calculatorContainer/ImcCalculator";

export async function generateMetadata() {
  return {
    title: "Calculadora IMC | Utility",
    description: "Calcule seu IMC para saber se você está na faixa de peso saudável e receba dicas para melhorar sua saúde!",
    alternates: {
      canonical: "https://utilitytools.vercel.app/calculadora-imc",
    },
  };
}

export default function ImcCalculator() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Calculadora de IMC</h1>
      <ImcCalculatorContainer />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">O que é uma Calculadora de IMC?</h2>
          <p>
            A <strong>calculadora de IMC</strong> é uma ferramenta essencial para determinar o{" "}
            <strong>índice de massa corporal</strong> (IMC), que é calculado com base no seu <strong>peso</strong> e{" "}
            <strong>altura</strong>. O IMC é um indicador importante para avaliar se você está dentro de um{" "}
            <strong>peso saudável</strong>, acima ou abaixo do recomendado. Manter um IMC adequado é crucial para evitar problemas de
            saúde e garantir uma melhor qualidade de vida.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Como Usar a Calculadora de IMC</h2>
          <p>
            Para utilizar a <strong>calculadora de IMC</strong>, basta inserir seu <strong>peso</strong> e <strong>altura</strong>. A
            ferramenta calculará automaticamente seu <strong>IMC</strong> e fornecerá seu <strong>status de peso</strong>, que pode
            variar entre <strong>abaixo do peso</strong>, <strong>peso normal</strong>, <strong>sobrepeso</strong> ou{" "}
            <strong>obesidade</strong>. Este resultado é fundamental para entender melhor sua saúde e tomar medidas adequadas.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Benefícios de Usar uma Calculadora de IMC</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Estimativa rápida do status de peso:</strong> A calculadora de IMC oferece uma avaliação imediata do seu peso em
              relação à sua altura, permitindo que você saiba rapidamente se está dentro da faixa de peso saudável.
            </li>
            <li>
              <strong>Identificação de possíveis riscos à saúde:</strong> Ao calcular seu IMC, você pode identificar se está em risco
              de desenvolver doenças relacionadas ao peso, como diabetes, hipertensão e doenças cardíacas.
            </li>
            <li>
              <strong>Orientação para ajustar dietas e exercícios:</strong> Com base nos resultados do IMC, você pode adaptar sua
              alimentação e rotina de exercícios para alcançar ou manter um peso saudável, promovendo um estilo de vida mais
              equilibrado.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Dicas para Manter um Peso Saudável</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Adote uma alimentação balanceada e nutritiva:</strong> Inclua uma variedade de alimentos ricos em nutrientes na
              sua dieta diária, como frutas, vegetais, grãos integrais e proteínas magras, para garantir que seu corpo receba todos os
              nutrientes necessários.
            </li>
            <li>
              <strong>Pratique exercícios físicos regularmente:</strong> Mantenha-se ativo com atividades físicas que você goste, como
              caminhadas, corridas, natação ou qualquer outro exercício que aumente sua frequência cardíaca e fortaleça seus músculos.
            </li>
            <li>
              <strong>Mantenha-se hidratado e evite dietas extremas:</strong> Beba bastante água ao longo do dia para manter seu corpo
              hidratado e evite dietas que prometem resultados rápidos, mas que não são sustentáveis a longo prazo, pois podem
              prejudicar sua saúde.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Conclusão</h2>
          <p>
            Utilize nossa <strong>calculadora de IMC</strong> para monitorar seu <strong>peso</strong> e <strong>saúde geral</strong>.
            Lembre-se de que, para uma avaliação completa e personalizada, é sempre recomendável consultar um{" "}
            <strong>profissional de saúde</strong>. Manter um peso saudável é um passo importante para uma vida mais longa e com melhor
            qualidade.
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
            <Link href="contador-caracteres" className="p-2 text-transparent90 underline">
              Contador de caracteres
            </Link>
            <Link href="calculadora-porcentagem" className="p-2 text-transparent90 underline">
              Calculadora de porcentagem
            </Link>
            <Link href="calculadora-tmb" className="p-2 text-transparent90 underline">
              Calculadora de TMB
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
