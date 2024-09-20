import Link from "next/link";
import ConverterContainer from "./converter/ConverterContainer";

export async function generateMetadata() {
  return {
    title: "Conversor de Moedas | Utility",
    description:
      "Converta facilmente entre diferentes moedas com nossa ferramenta online gratuita. Experimente agora e simplifique suas conversões de moeda de forma precisa!",
    alternates: {
      canonical: "https://utilitytools.vercel.app/conversor-moedas",
    },
  };
}

export default function CurrencyConverter() {
  return (
    <main>
      <h1 className="text-3xl mt-2 text-center">Conversor de Moedas:</h1>
      <ConverterContainer />
      <article className="p-10">
        <div className="mb-3">
          <h2 className="text-2xl">Entenda o Conversor de Moedas</h2>
          <p>
            Nosso <strong>conversor de moedas</strong> online permite que você converta facilmente entre diferentes moedas de forma
            rápida e precisa. Ideal para viajantes, investidores e qualquer pessoa que precise de conversões de moeda confiáveis.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Como Utilizar o Conversor de Moedas</h2>
          <p>
            Para usar o <strong>conversor de moedas</strong>, selecione as moedas de origem e destino, insira o valor desejado e a
            ferramenta calculará automaticamente a conversão. Isso é útil para planejar viagens, realizar investimentos internacionais
            e muito mais.
          </p>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Benefícios do Conversor de Moedas</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Conversões rápidas e precisas:</strong> Obtenha taxas de câmbio atualizadas em tempo real, garantindo conversões
              exatas.
            </li>
            <li>
              <strong>Versatilidade:</strong> Ideal para uma variedade de usos, incluindo planejamento de viagens, investimentos e
              compras internacionais.
            </li>
            <li>
              <strong>Interface intuitiva:</strong> Com uma interface amigável, qualquer pessoa pode usar o conversor de moedas sem
              dificuldades.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Dicas para Utilizar o Conversor de Moedas</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Verifique as taxas de câmbio:</strong> Sempre confira as taxas de câmbio atualizadas para garantir que você está
              obtendo a melhor conversão.
            </li>
            <li>
              <strong>Planeje suas finanças:</strong> Use o conversor para planejar suas finanças em viagens e investimentos
              internacionais.
            </li>
            <li>
              <strong>Experimente diferentes valores:</strong> Teste com diversos valores para ver como as taxas de câmbio afetam suas
              conversões.
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h2 className="text-2xl">Conclusão</h2>
          <p>
            Utilize nosso <strong>conversor de moedas</strong> para converter entre diferentes moedas de forma rápida e precisa. Para
            uma análise mais detalhada e personalizada, é sempre recomendável consultar um profissional financeiro. Simplifique suas
            transações financeiras internacionais com nossa prática ferramenta online.
          </p>
        </div>
      </article>
      <div className="w-full pt-2 transparent flex justify-center">
        <div className="m-2">
          <h3 className="m-2">Serviços semelhantes:</h3>
          <nav className="flex flex-wrap">
            <Link href="gerador-senha" className="p-2 text-transparent90 underline">
              Gerador de senhas
            </Link>
            <Link href="contador-caracteres" className="p-2 text-transparent90 underline">
              Contador de caracteres
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
